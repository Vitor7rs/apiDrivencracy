import { Router } from "express";
import { createChoice } from "../controllers/createChoiceController.js";
import { createPoll } from "../controllers/createPollController.js";
import { getChoices } from "../controllers/getChoicesController.js";
import { getPoll } from "../controllers/getPollController.js";

const pollRouter = Router();

pollRouter.post("/poll", createPoll)
pollRouter.get("/poll", getPoll)

pollRouter.post("/choice", createChoice)
pollRouter.get("/poll/:id/choice", getChoices)

pollRouter.post("/choice/:id/vote", () => { })
pollRouter.get("/poll/:id/result", () => { })

export default pollRouter;