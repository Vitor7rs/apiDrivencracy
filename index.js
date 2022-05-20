import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import routers from "./src/Routers/routers.js"
//Router

dotenv.config();

const app = express();
app.use(json());
app.use(cors());

app.use(routers);


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Running PORT ${port}.`);
});