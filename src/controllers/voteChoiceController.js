import db from "../../db.js";
import dayjs from "dayjs";
import { ObjectId } from "mongodb";

export async function voteChoice(req, res){
    const choiceId = req.params.id
    try{
        const choice = await db.collection("choices").findOne({ _id: new ObjectId(choiceId)});
        console.log(choice)
        if(!choice){
            return res.status(404).send("Opção não encontrada")
        }

        const poll = await db.collection("polls").findOne({_id: new ObjectId(choice.pollId)})
        if (!dayjs().isBefore(dayjs(poll.expireAt))){
            return res.status(403).send("Enquete já encerrada")
        }

        await db.collection("choices").updateOne(choice, {$inc:{votes: 1}})
        return res.sendStatus(201)

    }catch(error){
        return res.send(error)
    }

}