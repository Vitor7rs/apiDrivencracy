import db from "../../db.js";

export async function getPoll(req, res) {
    try {
        const polls = await db.collection("polls").find().toArray();
        res.status(200).send(polls)
    } catch (error) {
        res.status(500).send(error);
    } 
}