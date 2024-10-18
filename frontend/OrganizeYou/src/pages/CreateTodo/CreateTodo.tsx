import { useState } from "react";
import { Button } from "../../components/Button";
import { Heading } from "../../components/Heading";
import { InputBox } from "../../components/InputBox"

export const CreateTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
 
  return (
    <div>
      <div className="bg-slate-100 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
          <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4 shadow-xl">
            <Heading label={"Create Todo"} />
            <InputBox
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setTitle(e.target.value);
              }}
              placeholder="Title"
              label={"Title"}
            />
            <InputBox
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setDescription(e.target.value);
              }}
              placeholder="Description"
              label={"Description"}
            />
            <div className="pt-4">
            <Button 
            label={"create"} 
            onClick={()=>{
                const todo = { title, description };
                console.log(todo);
            }}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
