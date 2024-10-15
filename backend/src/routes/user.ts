// import express from "express";
import express, { NextFunction, Request, Response } from "express";
import { z } from "zod";
import { User } from "../db.js";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config.js";
//import { authMiddleware } from "../middleware.js";
export const app = express();
 const userRouter = express.Router();

const signUpSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  firstName: z.string(),
  lastName: z.string(),
});

userRouter.post(
  "/login",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch (error) {}
  }
);

userRouter.post(
  "/signup",
  async (req: Request, res: Response, next: NextFunction) => {
    console.log(req.headers);
    console.log(req.body);

    const parsed = signUpSchema.safeParse(req.body);
    console.log(parsed.error);
    if (!parsed.success && !req.body) {
      return res.json({
        msg: "wrong inputs / Email already taken",
      });
    } else {
      const existingUser = await User.findOne({
        email: req.body.email,
      });
      if (existingUser) {
        return res.json({
          msg: "wrong inputs / Email already taken",
        });
      } else {
        const user = await User.create({
          email: req.body.email,
          password: req.body.password,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
        });
        const userId: any = user._id;
        const token = jwt.sign({ userId }, JWT_SECRET); // creates the jwt token using their id and the secret key
        res.json({
          msg: "user created successfully",
          token: token,
        });
      }
    }
  }
);

const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

userRouter.post("/login",
async (req: Request, res: Response, next: NextFunction) => {
    try {
      const parsed = LoginSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(411).json({
          msg: "input incorrect",
        });
      }
      const user = await User.findOne({
        email: req.body.email,
        password: req.body.password,
      });
      if (user) {
        const token = jwt.sign({ userId: user._id }, JWT_SECRET);
        res.json({
          token: token,
        });
        
      }
      
    } catch (error) {
      res.status(401).json({
        message: "Error while logging in",
      });
    }
  }
);

app.use('/user',userRouter)

export  {userRouter};
