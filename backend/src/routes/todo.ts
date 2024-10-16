import express, { Request, Response } from "express";
import z from "zod";
import { Todo } from "../db";

const todoSchema = z.object({
  title: z.string(),
  description: z.string(),
  userId: z.string()
});
const todoRouter = express.Router();

todoRouter.post("/createtodo", async (req: Request, res: Response) => {
  console.log(req.headers);
  console.log(req.body);
  try{
  const parsed = todoSchema.safeParse(req.body);
  console.log(parsed.error);
  if (!parsed.success && !req.body) {
    res.json({
      msg: "title already exists",
    });
  } 
    const existingTodo:Array<object> | null= await Todo.findOne({
      title: req.body.title,
    });
    if (existingTodo!.length!=0) {
      res.json({
        msg: "wrong inputs",
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

