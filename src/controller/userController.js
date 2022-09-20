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
                        return res.send('usuário cadastrado. \n' + JSON.stringify(req.body))
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
        var email = req.query.email;

        try {
            await userModel.findOne({ email }).exec((err, users) => {
                if (err) {
                    return res.status(500);
                }

                if (users === null) {
                    return res.status(403).send("Usuário inexistente");
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
                if (err) {
                    res.status(403).send("Informe o ID correto.")
                }
                else {
                    res.status(200).send("Usuário atualizado")
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
            await userModel.findByIdAndDelete((req.body._id), function (_id, err) {
                if (err) {
                    res.status(403).send("Informe o ID correto.")
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

