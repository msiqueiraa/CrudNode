const userModel = require("../model/userModel");
const userService = require("../service/userService")
class UserController {
    static async store(req, res) {
        const response =  await userService.newModelService(req);
        const{statusRes,text} = response;
        res.status(statusRes).send(text);
    }

    static async read(req, res) {
        const response = await userService.readModelService(req);
        const{statusRes,text} = response;
        res.status(statusRes).send(text);
       
    }

    static async updateUser(req, res) {
       const response = await userService.updateModelService(req);
       const{statusRes,text}=response;
       res.status(statusRes).send(text);
    }

    static async deleteUser(req, res) {
        const response = await userService.deleteModelService(req);
        const{statusRes,text}=response;
        res.status(statusRes).send(text);

    }
}

module.exports = UserController;

