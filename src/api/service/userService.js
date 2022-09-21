const userRepository = require('../repository/userRepository')
const userModel = new userRepository();

async function newModelService(req){
const result = await userModel.newModel(req)

if(result===400){
    return({statusRes:400,text:'Erro ao criar usuário'})
}
else if(result===201){
    return({statusRes:201, text:'Usuário criado'})
}
else{
    return({statusRes:500, text:'erro não mapeado'})
}
}

async function readModelService(req){
    const result = await userModel.readModel(req)
    if(result===400){
        return({statusRes:400, text:'erro ao procurar usuário'})
    }
    else if(result===403){
        return({statusRes:404, text:'Usuário inexistente'})
    }
    else {
        return({statusRes:200, text: result})
    }
    
}

async function updateModelService(req){
    const result = await userModel.updateModel(req)
    if(result===404){
        return({statusRes: 404, text:'informe o ID correto'})
    }
    else if(result===200){
        return({statusRes: 200, text:'Usuário atualizado'})
    }
    else {
        return({statusRes:500, text: "erro desconhecido"})
    }
}

async function deleteModelService(req){
    const result = await userModel.deleteModel(req)
    if(result===200){
        return({statusRes: 200, text:'Usuário deletado'})
    }
    else if(result===404){
        return({statusRes: 404, text:'Id não encontrado'})
    }
    else {
        return({statusRes:500, text: "erro desconhecido"})
    }
}
module.exports = {newModelService, readModelService, updateModelService, deleteModelService}