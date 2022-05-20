import { Router } from "express";
import { createPoll } from "../controllers/createPollController.js";
import { getPoll } from "../controllers/getPollController.js";

const pollRouter = Router();

pollRouter.post("/poll", createPoll)
pollRouter.get("/poll", getPoll)

pollRouter.post("/choice", () => { })
pollRouter.get("/poll/:id/choice", () => { })

pollRouter.post("/choice/:id/vote", () => { })
pollRouter.get("/poll/:id/result", () => { })

export default pollRouter;