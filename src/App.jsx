import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Skills from './components/Skills'
import TestingMethods from './components/TestingMethods'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'

export default function App() {
  return (
    <div className="min-h-screen bg-dark-950 text-slate-100">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Skills />
        <TestingMethods />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
