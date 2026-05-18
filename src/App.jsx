import { motion } from 'framer-motion'
import Background3D from './components/Background3D'
import CursorGlow from './components/CursorGlow'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'
// update
function App() {
  return (
    <div className="min-h-screen">
      <Background3D />
      <CursorGlow />
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="glass py-8 px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400"
          >
            © {new Date().getFullYear()} Your Name. Built with React, Tailwind CSS, and Three.js.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-sm mt-2"
          >
            Designed with ❤️ for recruiters and opportunities
          </motion.p>
        </div>
      </footer>
    </div>
  )
}

export default App
