import db from "../../db.js";

export async function resultPoll(req, res){
    const winChoice = {
        title: "",
        votes: 0
    }

    try{
        const poll = await db.collection("polls").findOne();
        if (!poll){return res.status(404).send("Enquete não encontrada")}
    }catch(error){
        return res.send(error)
    }
}