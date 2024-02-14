import './App.css'
import Header from './components/Header'
import Operations from './components/Operations'
import Saved from './components/Saved'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <header id='header'>
        <Header />
      </header>

      <main id='operations' className='content-center'>
        <Operations />
      </main>

      {/* This component shows operations history */}
      <section id='saved' className='content-center'>
        <Saved />
      </section>

      <footer id='footer'>
        <Footer />
      </footer>
    </>
  )
}

export default App

// TODO:

// - Styled components, pasar los estilos a cada componente
// - Terminar de crear los componentes necesarios