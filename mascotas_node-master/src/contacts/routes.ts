import * as express from "express";
import axios from "axios";

export function initModule(app: express.Express) {
    app.route("/v1/contact").post(sendContactRequest);
}

async function sendContactRequest(req: express.Request, res: express.Response){
    try{
    let url = "https://discordapp.com/api/webhooks/726170307014164570/z4ZF8lShDvtNsTr8V-dFUB_K5n385N7VyV0VJEvxxI-sXFuHN8mXQNBB7WQy9nvMuoAM";
    let content = {
        "username":req.body.titulo + " - " + req.body.correo + " - " + req.body.celular,
        "content" : req.body.descripcion
    }
    const sendConsulta = async (content:any) => { axios.post(url,JSON.parse(JSON.stringify(content))).then(response => {
            res.json(response);
        }).catch(error => {
            res.json(error);
        });
    }
    return res.json(sendConsulta(content));
    }catch(error){
        res.json(error);
    }
}