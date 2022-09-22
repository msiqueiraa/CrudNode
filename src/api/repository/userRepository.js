const userModel = require('../model/userModel')
class UserRepository{
    constructor(){
        this.userModel = userModel; 
    }
async newModel(req) {
    try {
        const { nome, senha, email, dataNascimento } = req.body;
        const response = new this.userModel({ nome, senha, email, dataNascimento })
        await response.save()
        return 201
    }
    catch (err) {
        return 400;
    }
}

async readModel(req) {
    try {
        var email = req.query.email;
       const response= await this.userModel.findOne({ email })
       if(response===null){
        return 404
       }
       return response._doc;     
    }
    catch (err) {
        return 400
    }
}

async updateModel(req){
    try{
       await userModel.findByIdAndUpdate(req.body, { nome: req.body.nome, senha: req.body.senha, email: req.body.email, dataNascimento: req.body.dataNascimento })
         return 200;    
        }   
    
    catch(err){
        return 404
    }
}
async deleteModel(req){
    try{
        await userModel.findByIdAndDelete(req.body._id)
        return 200;       
    }
    catch(err){
        return 404;
    }
}
}
module.exports = UserRepository;
