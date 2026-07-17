import React,{useContext} from 'react'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import {MyStore} from './context/MyContext'

const App = () => {
const {count,setCount} = useContext(MyStore)

  return (
    <main>
      <Home />
      <About/>
      <Contact/>
    </main>
   )
}

export default App