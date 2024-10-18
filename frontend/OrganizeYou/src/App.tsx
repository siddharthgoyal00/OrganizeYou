import { useState } from 'react'
import {Home} from  "./pages/Home/Home"
import {Login} from  "./pages/Login/Login"
import {SignUp} from "./pages/SignUp/SignUp" 
import {BrowserRouter , Routes, Route} from "react-router-dom"
import './App.css'
import { CreateTodo } from './pages/CreateTodo/CreateTodo'
import { Navbar } from './components/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
   <BrowserRouter>
   <Navbar></Navbar>
     <Routes>
       <Route path="/home" element={<Home />} />
       <Route path="/signup" element={<SignUp />} />
       <Route path="/login" element={<Login/>} />
       <Route path="/createtodo" element={<CreateTodo/>} />

     </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
