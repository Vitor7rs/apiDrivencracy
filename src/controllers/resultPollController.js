import db from "../../db.js";
import { ObjectId } from "mongodb";

export async function resultPoll(req, res){
    const pollId = req.params.id
    try{
        const poll = await db.collection("polls").findOne({_id: new ObjectId(pollId)})
        if(!poll){return res.status(404).send("Enquete não encontrada")}

        const choices = await db.collection("choices").find({pollId: pollId}). toArray();
        if(!choices){return res.send("Erro ao buscar as alternativas")}

        const result = {
            poll: poll,
            choices: choices
        }

        res.status(200).send(result)

    }catch(error){
        return res.send(error)
    }
}