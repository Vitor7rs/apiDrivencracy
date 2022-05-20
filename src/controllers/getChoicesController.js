import db from "./../../db.js"

export async function getChoices(req, res){

    try{
        const choices = await db.collection("choices").find().toArray();
        res.send(choices)
    }catch(error){
        res.send(error)
    }
}