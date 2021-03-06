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
const imageService = require("../image/service");
const profileService = require("../profile/service");
const passport_1 = require("../token/passport");
/**
 * Modulo de imágenes de perfil
 */
function initModule(app) {
    // Rutas del controlador
    app
        .route("/v1/profile/picture")
        .post(passport_1.onlyLoggedIn, updateProfilePicture);
}
exports.initModule = initModule;
/**
 * @api {post} /v1/profile/picture Guardar Imagen de Perfil
 * @apiName Guardar Imagen de Perfil
 * @apiGroup Perfil
 *
 * @apiDescription Guarda una imagen de perfil en la db y actualiza el perfil
 *
 * @apiExample {json} Body
 *    {
 *      "image" : "Base 64 Image Text"
 *    }
 *
 * @apiSuccessExample {json} Response
 *    {
 *      "id": "id de imagen"
 *    }
 *
 * @apiUse AuthHeader
 * @apiUse ParamValidationErrors
 * @apiUse OtherErrors
 */
function updateProfilePicture(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const imageResult = yield imageService.create(req.body);
        const profileResult = yield profileService.updateProfilePicture(req.user.user_id, imageResult.id);
        res.json({
            id: profileResult.picture
        });
    });
}
//# sourceMappingURL=routes.js.map