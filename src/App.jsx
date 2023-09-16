import './App.css'
import About from './compoments/About'
import Faq from './compoments/Faq'
import Header from './compoments/Header'
import Kongs from './compoments/Kongs'
import Nft from './compoments/Nft'
import Partner from './compoments/Partner'
import Teams from './compoments/Teams'
import Utilities from './compoments/Utilities'
import Roadmap from './compoments/Roadmap'
import Preloder from './compoments/Preloder'
import BackToTop from './compoments/BackToTop'
import { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css";


function App() {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, [])
  return (
    <>
      <Preloder />
      <Header />
      <About />
      <Utilities />
      <Kongs />
      <Nft />
      <Roadmap />
      <Partner />
      <Teams />
      <Faq />
      <BackToTop />
    </>
  )
}

export default App
