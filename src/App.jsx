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


function App() {
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
