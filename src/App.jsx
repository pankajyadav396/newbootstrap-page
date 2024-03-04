
import './App.css'
import Accordonsec from './components/Accordonsec'
import Backtotop from './components/Backtoptop'
import Easycreate from './components/Easycreate'
import Footer from './components/Footer'
import Header from './components/Header'
import Newsletter from './components/Newsletter'
import Recycling from './components/Recycling'
import Preloadingsec from './components/Preloadingsec'
function App() {

  return (
    <>
      <div className='overflow-hidden'>
        <Preloadingsec />
        <Backtotop />
        <Header />
        <Easycreate />
        <Recycling />
        <Accordonsec />
        <Newsletter />
        <Footer />
      </div>
    </>
  )
}

export default App
