import express, { Request, Response } from "express";
import z from "zod";
import { Todo } from "../db";
import { authMiddleware } from "../middleware";
const todoRouter = express.Router();
const todoSchema = z.object({
  title: z.string(),
  description: z.string(),
});


todoRouter.post("/createtodo", authMiddleware, async (req: Request, res: Response): Promise<void> => {
  console.log("headers",req.headers);
  console.log("Body",req.body);
  if (!req.body.userId){
   res.status(400).json({msg: "userId is required "})
  }
  try{
  const parsed = todoSchema.safeParse(req.body);
  console.log(parsed.error);
  if (!parsed.success && !req.body) {
    res.json({
      msg: "title already exists",
    });
  } 
    const existingTodo:Array<object> | null= await Todo.findOne({title: req.body.title});
    if (existingTodo) {
      res.status(400).json({
        msg: "title exists",
      });
      
    }
      const newtodo = await Todo.create({
        title: req.body.title,
        description: req.body.description,
        userId:req.body.userId 
      });
      res.status(200).json({
        msg: "new todo created",
        todo: newtodo
      })
      
    }
      catch (error) {
        res.status(401).json({
          message: "Error while creating todo",
        });
      }
    
  }
);
export default todoRouter ;

