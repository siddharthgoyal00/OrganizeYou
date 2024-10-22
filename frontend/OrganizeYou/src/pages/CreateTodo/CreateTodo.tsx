import { useState } from "react";
import { Button } from "../../components/Button";
import { Heading } from "../../components/Heading";
import { InputBox } from "../../components/InputBox"
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const CreateTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  
  const navigate = useNavigate()
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
              
            <Button label="Create"
            onClick={async () => {
              const token = localStorage.getItem("token");
              // const userId  = localStorage.getItem("userId")
              try {
                const response = await axios.post(
                  "http://localhost:3001/todo/createtodo",
                  {
                    title: title,                    
                    description: description,
                    userId:token
                  },
                  {
                    headers: {
                      'Authorization': `Bearer ${token}`, // Add the Authorization header
                    },
                  }
                );
                localStorage.setItem("token", response.data.token);
                console.log('todo created')
                navigate("/home");
              } catch (error) {
                console.log(error)
                // navigate("/home");
                
              }
            }
          }
            
            />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
