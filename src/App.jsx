import './index.css'
import About from './sections/components/About'
import Contact from './sections/components/Contact'
import HeroSection from './sections/components/HeroSection'
import Navbar from './sections/components/Navbar'
import Projects from './sections/components/Projects'
import Stats from './sections/components/Stats'
import Tools from './sections/components/Tools'

function App() {
  return (
    <>
      <section className='glass-effect'>
        <div className='mx-10 md:mx-0 lg:mx-10 md:pl-10 lg:pr-10 text-slate-200'>
          <Navbar />
          <HeroSection />
          <Tools />
          <About />
          <Projects />
          <Stats />
          <Contact />
        </div>
      </section>
    </>
  )
}

export default App
