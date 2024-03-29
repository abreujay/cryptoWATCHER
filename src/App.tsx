
import './App.css'

// icons
import mainIcon from './assets/artificial-intelligence.png'
import gitHub from '../public/github.png'
import linkedin from '../public/linkedin-logo.png'
import instagram from '../public/instagram.png'
// routes
import Home from './router/Home'

function App() {
  

  return (
    <div className="App">
      <header>
        <img src={mainIcon} alt="" />
        <h4>Crypto WATCHER</h4>
      </header>
      <main>
        <div className="Home">
          <Home/>
        </div>
      </main>
      <footer>
        <h4>project by W</h4>
        <p>Consulte informações sobre criptomoedas de forma rápida e simples</p>
        <div className="links">
          <a href="https://www.instagram.com/abreu.jay/"><img src={instagram} alt="Instagram" /></a>
          <a href="https://github.com/abreujay"><img src={gitHub} alt="GitHub" /></a>
          <a href="https://www.linkedin.com/in/jonathan-abreu-666715223/"><img src={linkedin} alt="Linkedin" /></a>
        </div>
      </footer>
    </div>
  )
}

export default App
