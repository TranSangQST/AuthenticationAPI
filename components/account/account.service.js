const { models } = require("../../models");

module.exports.getAccountByEmail = async (email) => {
    try {
        const account = await models.account.findOne({
            raw: true,
            where: {
                email: email,
            },
        });
        return account;
    } catch (e) {
        console.log(e);
        return false;
    }
};

module.exports.addAccount = async (email, password, full_name) => {
    try {
        const account = await models.account.create({
            password: password,
            email: email,
            full_name: full_name,
            is_deleted: 0,
        });
        return account;
    } catch (e) {
        console.log(e);
        return false;
    }
};

module.exports.getAccountById = async (id) => {
    try {
        const account = await models.account.findOne({
            raw: true,
            where: {
                id: id,
            },
        });
        return account;
    } catch (e) {
        console.log(e);
        return false;
    }
};

module.exports.getAllAccounts = async () => {
    try {
        const accounts = await models.account.findAll({
            raw: true,
        });
        return accounts;
    } catch (e) {
        console.log(e);
        return false;
    }
};
