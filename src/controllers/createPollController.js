import dayjs from "dayjs";
import Joi from "joi";
import db from "./../../db.js"

const pollSchema = Joi.object({
    title: Joi.string().required(),
    expireAt: Joi.string()
});

export async function createPoll(req, res){
    let {title, expireAt} = req.body
    const { error } = pollSchema.validate(req.body); 
    if (error) {return res.sendStatus(422);}
    if (!expireAt || expireAt.length === 0){
        expireAt = (dayjs().add(30, 'day').format("YYYY-MM-DD HH:mm"))
    }

    try{
        await db.collection("polls").insertOne({title: title, expireAt: expireAt })
        res.sendStatus(201);
    }catch(error){
        res.send(error)
    }
}