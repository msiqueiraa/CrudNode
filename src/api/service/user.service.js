const userRepository = require('../repository/user.repository');
const userModel = new userRepository();

async function create(req) {
    const result = await userModel.create(req);

    return result;
}

async function readOne(req) {
    const result = await userModel.readOne(req);
    return result;
}

async function update(req) {
    const result = await userModel.update(req);
    return result;
}

async function remove(req) {
    const result = await userModel.remove(req);
    return result;
}

module.exports = {
    create,
    readOne,
    update,
    remove,
};
