const userService = require('../service/user.service');
class UserController {
    static async create(req, res) {
        const response = await userService.create(req.body);
        const { statusRes, text } = response;
        res.status(statusRes).send(text);
    }

    static async readOne(req, res) {
        const response = await userService.readOne(req.query.email);
        const { statusRes, text } = response;
        res.status(statusRes).send(text);
    }

    static async update(req, res) {
        const response = await userService.update(req.body);
        const { statusRes, text } = response;
        res.status(statusRes).send(text);
    }

    static async remove(req, res) {
        const response = await userService.remove(req.body);
        const { statusRes, text } = response;
        res.status(statusRes).send(text);
    }
}

module.exports = UserController;
