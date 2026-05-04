import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ASSETS, LETTER_CONTENT, SITE_COPY } from '../config'

function BirthdayCounter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (count >= 21) return
    const timer = window.setTimeout(() => setCount((value) => value + 1), 75)
    return () => window.clearTimeout(timer)
  }, [count])

  return (
    <div className="relative border border-ink bg-cream p-6 shadow-paper">
      <div className="grid min-h-[330px] place-items-center border border-ink bg-[linear-gradient(90deg,rgba(130,92,43,0.11)_1px,transparent_1px),linear-gradient(rgba(130,92,43,0.11)_1px,transparent_1px)] bg-[size:32px_32px]">
        <motion.div
          className="text-center"
          animate={{ scale: count === 21 ? [1, 1.035, 1] : 1 }}
          transition={{ repeat: count === 21 ? Infinity : 0, duration: 1.2 }}
        >
          <p className="font-serif text-[clamp(7rem,18vw,15rem)] italic leading-none text-rust">{count}</p>
          <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-ink/65">years loved out loud</p>
        </motion.div>
      </div>
      <img
        src={ASSETS.sunflower}
        alt=""
        className="absolute -right-8 -top-8 w-28 rotate-[18deg] drop-shadow-cutout"
      />
    </div>
  )
}

export default function GrowthFinale() {
  return (
    <section id="letter" className="relative z-10 px-5 py-28 sm:px-8">
      <div className="mx-auto grid max-w-[1380px] gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="kicker">final insert</p>
          <h2 className="mt-4 max-w-xl font-serif text-[clamp(3.6rem,9vw,9rem)] italic leading-[0.82] tracking-[-0.03em] text-ink">
            the note she keeps
          </h2>
          <p className="mt-7 max-w-lg text-lg leading-8 text-ink/68">
            The ending should feel like opening an envelope and finding something that was written slowly.
          </p>
          <div className="mt-10 max-w-lg">
            <BirthdayCounter />
          </div>
        </div>

        <div className="relative min-h-[760px]">
          <img
            src={ASSETS.envelope}
            alt=""
            className="absolute inset-x-0 top-4 mx-auto w-[min(840px,100%)] rotate-[-4deg] drop-shadow-cutout"
          />
          <motion.article
            className="relative mx-auto max-w-[650px] border border-ink bg-paper p-6 shadow-paper sm:p-10 lg:mt-28"
            initial={{ y: 36, opacity: 0, rotate: -1.5 }}
            whileInView={{ y: 0, opacity: 1, rotate: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ type: 'spring', stiffness: 120, damping: 18 }}
          >
            <div className="mb-8 flex items-start justify-between gap-5 border-b border-ink pb-4">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-rust">{SITE_COPY.birthdayGirl}.letter</p>
                <h3 className="mt-2 font-serif text-4xl italic text-ink">{LETTER_CONTENT.title}</h3>
              </div>
              <img src={ASSETS.petal} alt="" className="w-16 rotate-[18deg]" />
            </div>

            <div className="space-y-5 font-script text-[clamp(2rem,4vw,3.45rem)] leading-[1.02] text-blueInk">
              {LETTER_CONTENT.message.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-end justify-between gap-6 border-t border-ink pt-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink/55">
                cataloged with care
                <br />
                archive no. 021
              </p>
              <a
                href="#home"
                className="border border-ink bg-rust px-5 py-3 font-mono text-[10px] uppercase tracking-[0.18em] text-cream shadow-[4px_4px_0_#1f1a17] transition hover:-translate-y-0.5"
              >
                replay from top
              </a>
            </div>
          </motion.article>

          <img
            src={ASSETS.camera}
            alt=""
            className="absolute bottom-3 right-0 hidden w-44 rotate-[9deg] drop-shadow-cutout md:block"
          />
        </div>
      </div>
    </section>
  )
}
