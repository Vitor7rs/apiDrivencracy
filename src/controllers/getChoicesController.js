import db from "./../../db.js"

export async function getChoices(req, res){
    try{
        const choices = await db.collection("choices").find({pollId:req.params.id}).toArray();
        if(choices.length===0){return res.status(404).send("Enquete não encontrada")}
        return res.send(choices)
    }catch(error){
        res.send(404)
        res.send(error)
        return;
    }
}