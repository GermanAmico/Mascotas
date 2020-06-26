"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
function initModule(app) {
    app.route("/v1/contact").post(sendContactRequest);
}
exports.initModule = initModule;
function sendContactRequest(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let url = "https://discordapp.com/api/webhooks/726170307014164570/z4ZF8lShDvtNsTr8V-dFUB_K5n385N7VyV0VJEvxxI-sXFuHN8mXQNBB7WQy9nvMuoAM";
            let content = {
                "username": req.body.titulo + " - " + req.body.correo + " - " + req.body.celular,
                "content": req.body.descripcion
            };
            const sendConsulta = (content) => __awaiter(this, void 0, void 0, function* () {
                axios_1.default.post(url, JSON.parse(JSON.stringify(content))).then(response => {
                    res.json(response);
                }).catch(error => {
                    res.json(error);
                });
            });
            return res.json(sendConsulta(content));
        }
        catch (error) {
            res.json(error);
        }
    });
}
//# sourceMappingURL=routes.js.map