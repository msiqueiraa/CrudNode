const { json } = require('express');
const userService = require('../service/user.service');
class UserController {
    static async create(req, res) {
        try {
            const response = await userService.create(req);
            return res.status(201).json(response);
        } catch (err) {
            return res.status(400).send(err);
        }
    }

    static async readOne(req, res) {
        try {
            const response = await userService.readOne(req);
            return res.status(200).json(response);
        } catch (err) {
            return res.status(400).json(err);
        }
    }

    static async update(req, res) {
        try {
            const response = await userService.update(req);
            return res.status(200).json(response);
        } catch (err) {
            return res.status(400).json(err);
        }
    }

    static async remove(req, res) {
        try {
            const response = await userService.remove(req);
            return res.status(204).send();
        } catch (err) {
            return res.status(400).json(err);
        }
    }
}

module.exports = UserController;
