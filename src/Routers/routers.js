import { Router } from "express";
import { createChoice } from "../controllers/createChoiceController.js";
import { createPoll } from "../controllers/createPollController.js";
import { getChoices } from "../controllers/getChoicesController.js";
import { getPoll } from "../controllers/getPollController.js";
import { resultPoll } from "../controllers/resultPollController.js";
import { voteChoice } from "../controllers/voteChoiceController.js";

const pollRouter = Router();

pollRouter.post("/poll", createPoll)
pollRouter.get("/poll", getPoll)

pollRouter.post("/choice", createChoice)
pollRouter.get("/poll/:id/choice", getChoices)

pollRouter.post("/choice/:id/vote", voteChoice)
pollRouter.get("/poll/:id/result", resultPoll)

export default pollRouter;