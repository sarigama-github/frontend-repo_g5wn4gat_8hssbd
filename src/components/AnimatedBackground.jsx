import { motion } from 'framer-motion'

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* subtle moving beams */}
      <motion.div
        className="absolute left-1/2 top-[-10%] h-[70rem] w-[40rem] -translate-x-1/2 rotate-12 bg-gradient-to-b from-indigo-400/10 via-violet-400/10 to-pink-400/10 blur-3xl"
        animate={{ y: [0, 20, -10, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute left-1/3 top-[10%] h-[60rem] w-[30rem] -translate-x-1/2 -rotate-6 bg-gradient-to-b from-sky-400/10 via-emerald-400/10 to-teal-400/10 blur-3xl"
        animate={{ y: [0, -15, 15, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* glossy noise overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.06),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(236,72,153,0.06),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(14,165,233,0.06),transparent_40%)]" />
    </div>
  )
}
