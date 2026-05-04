import { motion } from 'framer-motion'
import { ASSETS } from '../config'

export default function MusicController({ isPlaying, onToggle, title, artist }) {
  return (
    <motion.aside
      className="fixed bottom-4 left-4 z-50 w-[min(330px,calc(100vw-32px))]"
      initial={{ y: 28, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 180, damping: 18, delay: 0.35 }}
    >
      <div className="relative">
        <img
          src={ASSETS.cassette}
          alt=""
          className="absolute -left-5 -top-9 w-24 rotate-[-9deg] drop-shadow-cutout"
        />
        <div className="ml-9 border border-ink bg-cream px-4 py-3 shadow-paper">
          <div className="mb-2 flex items-center justify-between gap-3 border-b border-ink pb-2">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-rust">
              {isPlaying ? 'now playing' : 'press play'}
            </p>
            <button
              type="button"
              onClick={onToggle}
              className="grid h-9 w-9 place-items-center border border-ink bg-rust font-mono text-sm font-bold text-cream shadow-[3px_3px_0_#1f1a17] transition hover:-translate-y-0.5"
              aria-label={isPlaying ? 'Pause music' : 'Play music'}
            >
              {isPlaying ? 'II' : '>'}
            </button>
          </div>
          <p className="truncate font-serif text-xl italic text-ink">{title}</p>
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink/55">{artist}</p>
        </div>
      </div>
    </motion.aside>
  )
}
