import express, { urlencoded } from "express";
import cors from "cors";

import  { userRouter} from "./routes/user";
import  todoRouter  from "./routes/todo";

const app = express();

const PORT  = 3001

//  handle the middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors());
app.use( "/user" ,userRouter );  
app.use("/todo", todoRouter)
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});