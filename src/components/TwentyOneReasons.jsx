import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ASSETS, TWENTY_ONE_REASONS } from '../config'

export default function TwentyOneReasons() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeReason = TWENTY_ONE_REASONS[activeIndex]

  return (
    <section id="reasons" className="relative z-10 px-5 py-28 sm:px-8">
      <div className="mx-auto max-w-[1380px]">
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="kicker">side b / the proof</p>
            <h2 className="mt-4 max-w-3xl font-serif text-[clamp(3.8rem,10vw,10rem)] italic leading-[0.78] tracking-[-0.03em] text-rust">
              21 reasons why
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-ink/68">
            Built like a vintage album insert: every row is a track, every track is one more reason she deserves the whole room softened for her.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative border border-ink bg-[#f4b7ca] p-4 shadow-paper sm:p-7">
            <div className="relative border border-ink bg-cream p-4 sm:p-7">
              <div className="mb-5 grid grid-cols-4 border border-ink text-center font-mono text-[10px] uppercase tracking-[0.16em] text-ink">
                <span className="border-r border-ink px-2 py-2">number</span>
                <span className="border-r border-ink px-2 py-2">length</span>
                <span className="border-r border-ink px-2 py-2">tracks</span>
                <span className="px-2 py-2">artist</span>
                <span className="border-r border-t border-ink px-2 py-2">21</span>
                <span className="border-r border-t border-ink px-2 py-2">forever</span>
                <span className="border-r border-t border-ink px-2 py-2">21</span>
                <span className="border-t border-ink px-2 py-2">Kai</span>
              </div>

              <div className="max-h-[650px] overflow-y-auto border-y border-ink">
                {TWENTY_ONE_REASONS.map((reason, index) => (
                  <button
                    key={reason}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`grid w-full grid-cols-[42px_1fr_56px] items-center gap-3 border-b border-ink/35 px-2 py-3 text-left transition last:border-b-0 sm:grid-cols-[60px_1fr_70px] ${
                      activeIndex === index ? 'bg-rust text-cream' : 'hover:bg-blush/25'
                    }`}
                  >
                    <span className="font-mono text-xs">{String(index + 1).padStart(2, '0')}</span>
                    <span className="font-mono text-xs uppercase tracking-[0.08em] sm:text-sm">
                      {reason}
                    </span>
                    <span className="text-right font-mono text-xs">{index === 20 ? '21:00' : '3:21'}</span>
                  </button>
                ))}
              </div>
            </div>

            <img
              src={ASSETS.petal}
              alt=""
              className="absolute -right-7 top-8 w-24 rotate-[28deg] drop-shadow-cutout"
            />
            <img
              src={ASSETS.sunflower}
              alt=""
              className="absolute -bottom-9 left-8 w-28 rotate-[-12deg] drop-shadow-cutout"
            />
          </div>

          <aside className="relative min-h-[580px]">
            <img
              src={ASSETS.photoStrip}
              alt=""
              className="absolute right-[4%] top-0 w-[52%] rotate-[8deg] drop-shadow-cutout"
            />
            <div className="absolute left-0 top-[18%] w-[82%] border border-ink bg-paper p-6 shadow-paper sm:p-9">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-rust">
                selected reason / {String(activeIndex + 1).padStart(2, '0')}
              </p>
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeReason}
                  className="mt-8 font-serif text-[clamp(3rem,7vw,6.7rem)] italic leading-[0.9] tracking-[-0.03em] text-ink"
                  initial={{ y: 18, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -18, opacity: 0 }}
                  transition={{ duration: 0.28 }}
                >
                  {activeReason}
                </motion.p>
              </AnimatePresence>
              <div className="mt-8 flex items-center gap-3 border-t border-ink pt-4">
                <img src={ASSETS.googleEyes} alt="" className="w-11 rotate-[-8deg]" />
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink/55">
                  click a track to change the note
                </p>
              </div>
            </div>
            <img
              src={ASSETS.exclamation}
              alt=""
              className="absolute bottom-10 right-12 w-20 rotate-[11deg] drop-shadow-cutout"
            />
          </aside>
        </div>
      </div>
    </section>
  )
}
