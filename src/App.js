
import './scss/app.scss';

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Journal from "./components/Journals"
import Blog from "./components/Blog"
import Adventure from "./components/Adventure"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Hero />
      <Journal/>
      <Blog/>
      <Adventure/>
      <Footer/>
    </div>
  )
}

export default App;
