import { ASSETS } from '../config'

export default function FloatingBubbles() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 paper-grid opacity-55" />
      <div className="absolute left-[7%] top-[18%] h-32 w-32 rounded-full bg-blush/20 blur-3xl" />
      <div className="absolute right-[9%] top-[42%] h-40 w-40 rounded-full bg-gold/20 blur-3xl" />
      <div className="absolute bottom-[8%] left-[30%] h-44 w-44 rounded-full bg-sage/20 blur-3xl" />

      <img
        src={ASSETS.petal}
        alt=""
        className="paper-float absolute left-[2%] top-[44%] hidden w-20 rotate-[-28deg] opacity-70 sm:block"
      />
      <img
        src={ASSETS.sunflower}
        alt=""
        className="paper-float-delay absolute right-[3%] top-[16%] hidden w-24 rotate-[12deg] opacity-80 md:block"
      />
      <img
        src={ASSETS.googleEyes}
        alt=""
        className="absolute bottom-[12%] right-[12%] hidden w-14 rotate-[-10deg] opacity-55 lg:block"
      />
    </div>
  )
}
