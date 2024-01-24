import { useState } from 'react'
import Header from './header/Header'
import Body from './body/Body'
import Footer from './footer/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Body/>
    <Footer/>
    </>
  )
}

export default App
