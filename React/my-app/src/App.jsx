import React, { useEffect, useState } from "react"
import Body from "./Components/Body"
import Counter from "./Components/Counter"
import Calculator from "./Components/Calculator"
import Header from "./Components/Header"
import './App.css'
import { ThemeContext } from "./Contexts/Theme"
import { CounterContext } from "./Contexts/Count"
import Products from "./Components/Products"
import { Outlet } from "react-router"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  


// function App() {
//   const names="Nandhika"
//   const age=21
//   const ht=169
//   const dept="Msc"

//   return (
//     <>

//      <div>App component</div>
//    <Body names={names} age={age} ht={ht} dept={dept}/>
//    <Counter/>
//     <Calculator/> 
//     </>
//   )
// }
// ----
// const App=()=>{
//   return (
//   <div>App component</div>
//   )
//   }

function App() {
  const [theme, setTheme] = useState("Light")
  const [count, setCount] = useState(0)
  //No dependency array---it is waste inside useffect
  //empty dependency---first time component come call(only one time call) (api calls use)
  //State and props variable 
  //array and dependency array
  useEffect(() => {
    document.body.className = theme
  }, [theme])

  function toggleTheme() {
    setTheme(theme === 'Light' ? 'Dark' : 'Light')
    increment()




  }
  function increment() {
    setCount(count + 1)
  }
  return (
    <ThemeContext.Provider value={{ theme: theme, toggleTheme: toggleTheme }}>
      <CounterContext.Provider value={{ count: count, countTheme: increment }}>
        <Header /><br></br>
        <Outlet/>
        {/* <Products></Products> */}
        <ToastContainer />

      </CounterContext.Provider>
    </ThemeContext.Provider>


  )
}



export default App;
