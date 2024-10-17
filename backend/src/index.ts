import express from "express";
import cors from "cors";

import  { userRouter} from "./routes/user";

const app = express();

const PORT  = 3001

//  handle the middlewares
app.use(express.json());
app.use(cors());
app.use( "/user" ,userRouter );  

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});