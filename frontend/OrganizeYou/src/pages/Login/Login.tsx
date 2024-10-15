


import { useState } from "react"
import { BottomWarning } from "../../components/BottomWarning"
import { Button } from "../../components/Button"
import { Heading } from "../../components/Heading"
import { InputBox } from "../../components/InputBox"
import {useNavigate} from "react-router-dom";
import { Navbar } from "../../components/Navbar"


export const Login = () => {

  
   const [username, SetUsername] = useState("");
   const [password, SetPassword] = useState("");
   const navigate= useNavigate();
  
    return <div> 
         <Navbar></Navbar>
         <div className="bg-slate-100 h-screen flex justify-center">
       
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4 shadow-xl">
        <Heading label={"Login"} />
        <InputBox onChange = {(e: React.ChangeEvent<HTMLInputElement>) => {SetUsername(e.target.value)}}  placeholder="abc@gmail.com" label={"Email"} />
        <InputBox onChange = {(e: React.ChangeEvent<HTMLInputElement>) => {SetPassword(e.target.value)}}  placeholder="password" label={"Password"} />
        <div className="pt-4">
          <Button label = "Login" onClick />
         
        </div>
        <BottomWarning label={"Don't have any account?"} buttonText={"SignUp"} to={"/"} />
      </div>
    </div>
  </div>
  </div>

}