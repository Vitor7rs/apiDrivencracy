import db from "../../db.js"
import Joi from "joi"
import { ObjectId } from "mongodb"
import dayjs from "dayjs"

const choiceSchema = Joi.object({
    title: Joi.string().required(),
    pollId: Joi.string().required()
})


export async function createChoice(req, res){
    const {title, pollId} = req.body
    const { error } = choiceSchema.validate(req.body); 
    if (error) {return res.sendStatus(422)}

    try{
       const poll = await db.collection("polls").findOne({ _id: new ObjectId(pollId) });
       console.log(poll)
        if (!poll) {
            return res.status(404).send("Enquente não existente")
        }
        
        if(poll){
            const choice = await db.collection("choices").findOne({title: title});
            if(choice){
                return res.sendStatus(409)
            }
            if (!dayjs().isBefore(dayjs(poll.expireAt))){
                return res.status(403).send("Enquete encerrada")
            }
        }

        const newChoice = {
            title: title,
            pollId: pollId,
            votes:0
        }

        await db.collection("choices").insertOne(newChoice)
        return res.sendStatus(201)
        
    }catch(error){
        res.send(error)
    } 
}