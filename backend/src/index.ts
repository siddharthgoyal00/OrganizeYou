import express, { urlencoded } from "express";


import mainRouter from "./routes/index";

const app = express();

const PORT  = 3001

//  handle the middlewares
app.use(express.json());

app.use("/notesApp", mainRouter );  

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});