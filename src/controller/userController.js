const userModel = require("../model/user");
class UserController {
    static store(req, res) {
        try {
            const { nome, senha, email, dataNascimento } = req.body;
            try {
                new userModel({ nome, senha, email, dataNascimento }).save(function (err) {
                    if (err) {
                        return res.status(400).send('erro ao cadastrar usuário')
                    }
                    else {
                        return res.send('usuário cadastrado')
                    }
                })
            }
            catch (err) {
                return (err);
            }
        }
        catch (err) {
            res.status(400)
        }
    }

    static async read(req, res) {
        const { email } = req.body;

        try {
            await userModel.findOne({ email }).exec((err, users) => {
                if (err) {
                    return res.status(500);
                }

                if (!users) {
                    return res.status(403);
                }

                else {
                    return res.send(users._doc);
                }
            })
        }

        catch (err) {
            res.status(400)
        }
    }

    static async updateUser(req, res) {
        try {
            await userModel.findByIdAndUpdate(req.body, { nome: req.body.nome, senha: req.body.senha, email: req.body.email, dataNascimento: req.body.dataNascimento }, function (err, _id, _nome, _senha, _email, _dataNascimento) {
                if (!_id || err) {
                    res.send("Informe o ID correto.")
                }
                else {
                    res.send("Usuário atualizado").status(200)
                }
            })

        }
        catch (err) {
            console.log(err)
            res.status(400)
        }
    }

    static async deleteUser(req, res) {
        try {
            await userModel.findByIdAndDelete((req.body._id), function (err) {
                if (err) {
                    res.send(err)
                }
                else {
                    res.send("Usuário deletado")
                }
            })
        }
        catch (err) {
            res.status(400)
        }

    }
}

module.exports = UserController;

