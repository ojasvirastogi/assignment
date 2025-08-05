
import './App.css'
import Navbar from './components/Navbar'
import Home from "./components/Home";
import About from './components/About';
import VisionSection from './components/VisionSection';
import Volunteer from './components/Volunteer';
import Footer from './components/Footer';
function App() {
 
  return (
    <div>
      <Navbar/>
       <main>
      <div id='home'>
        <Home/>
      </div> 
      <div id='about'>
        <About/>
      </div> 
        <div id='visionsection'>
        <VisionSection/>
      </div> 
        <div id='volunteer'>
      <Volunteer/>
      </div> 
    </main>
    <Footer/>
 </div>
  )
}

export default App
