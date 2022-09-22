const userModel = require('../model/user.model');
const userService = require('../service/user.service');
class UserController {
    static async createUser(req, res) {
        const response = await userService.createUserService(req.body);
        const { statusRes, text } = response;
        res.status(statusRes).send(text);
    }

    static async readOneUser(req, res) {
        const response = await userService.readOneUserService(req.query.email);
        const { statusRes, text } = response;
        res.status(statusRes).send(text);
    }

    static async updateUser(req, res) {
        const response = await userService.updateUserService(req.body);
        const { statusRes, text } = response;
        res.status(statusRes).send(text);
    }

    static async deleteUser(req, res) {
        const response = await userService.deleteUserService(req.body);
        const { statusRes, text } = response;
        res.status(statusRes).send(text);
    }
}

module.exports = UserController;
