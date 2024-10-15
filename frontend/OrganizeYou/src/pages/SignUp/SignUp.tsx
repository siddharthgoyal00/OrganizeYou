

import { useState } from "react"
import { BottomWarning } from "../../components/BottomWarning"
import { Button } from "../../components/Button"
import { Heading } from "../../components/Heading"
import { InputBox } from "../../components/InputBox"
import {useNavigate} from "react-router-dom";
import { Navbar } from "../../components/Navbar"

export const SignUp = () => {

   const [firstName, SetfirstName] = useState("");
   const [lastName, SetlastName] = useState("");
   const [username, SetUsername] = useState("");
   const [password, SetPassword] = useState("");
   const navigate= useNavigate();
  
    return <div>
      <Navbar></Navbar>
      <div className="bg-slate-100 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4 shadow-xl">
        <Heading label={"Sign up"} />
        <InputBox onChange = {(e: React.ChangeEvent<HTMLInputElement>) => {SetfirstName(e.target.value)}} placeholder="Abc" label={"First Name"} />
        <InputBox onChange = {(e: React.ChangeEvent<HTMLInputElement>) => {SetlastName(e.target.value)}}  placeholder="abc" label={"Last Name"} />
        <InputBox onChange = {(e: React.ChangeEvent<HTMLInputElement>) => {SetUsername(e.target.value)}}  placeholder="abc@gmail.com" label={"Email"} />
        <InputBox onChange = {(e: React.ChangeEvent<HTMLInputElement>) => {SetPassword(e.target.value)}}  placeholder="password" label={"Password"} />
        <div className="pt-4">
          <Button label = "SignUp" onClick />
         
        </div>
        <BottomWarning label={"Already have an account?"} buttonText={"Login"} to={"/login"} />
      </div>
    </div>
  </div>
  </div>
}