import './index.css'
import About from './sections/components/About'
import HeroSection from './sections/components/HeroSection'
import Tools from './sections/components/Tools'

function App() {
  return (
    <>
      <section className='glass-effect'>
        <div className='mx-10 md:mx-0 lg:mx-10 md:pl-10 lg:pr-10 text-slate-200'>
        <HeroSection />
        <Tools />
        <About />
        </div>
      </section>
    </>
  )
}

export default App
