import Hero from './components/Hero'
import Who from './components/Who'
import Benefits from './components/Benefits'
import HowItWorks from './components/HowItWorks'
import UseCases from './components/UseCases'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import WhyDifferent from './components/WhyDifferent'
import AnimatedBackground from './components/AnimatedBackground'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-gradient-to-br from-indigo-500 to-pink-500" />
            <span className="font-semibold">qr.lt</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-700">
            <a href="#why" className="hover:text-slate-900">Why qr.lt?</a>
            <a href="#how" className="hover:text-slate-900">How it works</a>
            <a href="#cta" className="inline-flex items-center rounded-full bg-slate-900 text-white px-4 py-2 font-semibold">Get early access</a>
          </nav>
        </div>
      </header>

      <main className="relative">
        <AnimatedBackground />
        <Hero />
        <WhyDifferent />
        <Who />
        <Benefits />
        <HowItWorks />
        <UseCases />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>

      <footer className="py-10 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 text-sm text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} qr.lt — AI QR and smart links</p>
          <p className="text-slate-500">Built in Lithuania, hosted in EU</p>
        </div>
      </footer>
    </div>
  )
}

export default App
