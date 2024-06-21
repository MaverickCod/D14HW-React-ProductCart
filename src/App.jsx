import React, { createContext, useState } from 'react'
import "./App.css"
import Left from './components/Left'
import Right from './components/Right'


import { data } from "./components/Data"

export const productContext = createContext()

function App() {

  const [products,setProducts] = useState(data);
  const [cart,setCart] = useState([]);
  const [total,setTotal] = useState(0)

  return (
    <>
    <productContext.Provider value={{ products, setProducts , cart , setCart , total , setTotal}}>
     <div className="wrapper">
       <Left />
       <Right />
     </div>
     </productContext.Provider>
    </>
  )
}

export default App