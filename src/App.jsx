import { useEffect, useRef, useState } from 'react'
import HeroDashboard from './components/HeroDashboard'
import TwentyOneReasons from './components/TwentyOneReasons'
import GrowthFinale from './components/GrowthFinale'
import FloatingBubbles from './components/FloatingBubbles'
import FlowerField from './components/FlowerField'
import MusicController from './components/MusicController'
import { BACKGROUND_MUSIC, SITE_COPY } from './config'

const navItems = [
  { id: 'home', label: 'Index' },
  { id: 'dossier', label: 'Dossier' },
  { id: 'reasons', label: '21 Things' },
  { id: 'letter', label: 'Letter' },
]

function App() {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false)
  const [currentSongIndex, setCurrentSongIndex] = useState(0)
  const audioRef = useRef(null)

  useEffect(() => {
    const playNextSong = () => {
      setCurrentSongIndex((prev) => (prev + 1) % BACKGROUND_MUSIC.length)
    }

    const audio = new Audio(BACKGROUND_MUSIC[0].url)
    audio.volume = 0.24
    audio.onended = playNextSong
    audioRef.current = audio

    return () => audio.pause()
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const nextUrl = BACKGROUND_MUSIC[currentSongIndex].url
    if (audio.src !== new URL(nextUrl, window.location.origin).href) {
      const shouldPlay = isMusicPlaying
      audio.pause()
      audio.src = nextUrl
      audio.load()

      if (shouldPlay) {
        audio.play().catch(() => setIsMusicPlaying(false))
      }
    }
  }, [currentSongIndex, isMusicPlaying])

  const toggleMusic = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isMusicPlaying) {
      audio.pause()
      setIsMusicPlaying(false)
      return
    }

    audio
      .play()
      .then(() => setIsMusicPlaying(true))
      .catch(() => setIsMusicPlaying(false))
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-paper text-ink">
      <FloatingBubbles />
      <FlowerField />

      <header className="fixed left-0 right-0 top-0 z-50 border-b border-ink/10 bg-paper/82 backdrop-blur-md">
        <nav className="mx-auto flex max-w-[1500px] items-center justify-between gap-4 px-4 py-3 sm:px-8">
          <a href="#home" className="font-mono text-[11px] uppercase tracking-[0.22em] text-rust">
            {SITE_COPY.catalog}
          </a>
          <div className="hidden items-center gap-7 sm:flex">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/70 transition hover:text-rust"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <MusicController
        isPlaying={isMusicPlaying}
        onToggle={toggleMusic}
        title={BACKGROUND_MUSIC[currentSongIndex].title}
        artist={BACKGROUND_MUSIC[currentSongIndex].artist}
      />

      <main>
        <HeroDashboard />
        <TwentyOneReasons />
        <GrowthFinale />
      </main>
    </div>
  )
}

export default App
