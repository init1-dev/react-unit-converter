// import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Operations from './components/Operations'
import Saved from './components/Saved'
import Footer from './components/Footer'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <header id='header'>
        <Header />
      </header>

      <main id='operations' className='content-center'>
        <Operations />
      </main>

      <section id='saved' className='content-center'>
        <Saved />
      </section>

      <footer id='footer'>
        <Footer />
      </footer>
      {/*
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
