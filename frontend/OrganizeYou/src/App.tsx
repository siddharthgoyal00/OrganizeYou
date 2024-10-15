import { useState } from 'react'
import {Home} from  "./pages/Home/Home"
import {Login} from  "./pages/Login/Login"
import {SignUp} from "./pages/SignUp/SignUp" 
import {BrowserRouter , Routes, Route} from "react-router-dom"
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <BrowserRouter>
     <Routes>
       {/* <Route path="/" element={<Home />} /> */}
       <Route path="/" element={<SignUp />} />
       <Route path="/login" element={<Login/>} />
     </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
