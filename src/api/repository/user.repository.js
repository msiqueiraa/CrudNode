const userModel = require('../model/user.model');
class UserRepository {
    constructor() {
        this.userModel = userModel;
    }
    async create(req) {
        const { nome, senha, email, dataNascimento } = req.body;
        const response = new this.userModel({
            nome: nome,
            senha: senha,
            email: email,
            dataNascimento: dataNascimento,
        });
        const create = await response.save();
        return create;
    }

    async readOne(req) {
        const email = req.query.email;
        const response = await this.userModel.findOne({ email });
        if (response === null) {
            return null;
        }
        return response._doc;
    }

    async update(req) {
        const { _id, nome, senha, email, dataNascimento } = req.body;
        const update = await userModel.findByIdAndUpdate(req.body, {
            _id: _id,
            nome: nome,
            senha: senha,
            email: email,
            dataNascimento: dataNascimento,
        });
        return update;
    }
    async remove(req) {
        const { _id } = req.body;
        const remove = await userModel.findByIdAndDelete(_id);
        return remove;
    }
}
module.exports = UserRepository;
