const userModel = require('../model/user.model');
class UserRepository {
    constructor() {
        this.userModel = userModel;
    }
    async newModel(bodyRequest) {
        try {
            const { nome, senha, email, dataNascimento } = bodyRequest;
            const response = new this.userModel({
                nome,
                senha,
                email,
                dataNascimento,
            });
            await response.save();
            return 201;
        } catch (err) {
            return 400;
        }
    }

    async readModel(queryRequest) {
        try {
            var email = queryRequest;
            const response = await this.userModel.findOne({ email });
            if (response === null) {
                return 404;
            }
            return response._doc;
        } catch (err) {
            return 400;
        }
    }

    async updateModel(bodyRequest) {
        try {
            await userModel.findByIdAndUpdate(bodyRequest, {
                nome: req.body.nome,
                senha: req.body.senha,
                email: req.body.email,
                dataNascimento: req.body.dataNascimento,
            });
            return 200;
        } catch (err) {
            return 404;
        }
    }
    async deleteModel(bodyRequest) {
        try {
            await userModel.findByIdAndDelete(bodyRequest._id);
            return 200;
        } catch (err) {
            return 404;
        }
    }
}
module.exports = UserRepository;
