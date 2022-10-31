const bcrypt = require("bcrypt");

const { models } = require("../../models");

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

module.exports.login = async (email, password) => {
    try {
        const account = await models.account.findOne({
            raw: true,
            where: {
                email: email,
            },
        });

        if (account) {
            const match = await bcrypt.compare(password, account.password);

            if (match) {
                return { email: account.email, fullname: account.full_name };
            }
        }

        return false;

        // return account;
    } catch (e) {
        console.log(e);
        return false;
    }
};
