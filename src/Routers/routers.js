import { Router } from "express";

const pollRouter = Router();

pollRouter.post("/poll",()=>{})
pollRouter.get("/poll", () => { })

pollRouter.post("/choice", () => { })
pollRouter.get("/poll/:id/choice", () => { })

pollRouter.post("/choice/:id/vote", () => { })
pollRouter.get("/poll/:id/result", () => { })