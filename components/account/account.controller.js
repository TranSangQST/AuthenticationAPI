const bcrypt = require("bcrypt");
const account = require("../../models/account");

const accountService = require("./account.service");

module.exports.addAccount = async (req, res) => {
    const { email, password, full_name } = req.body;
    // console.log("req.body: ", req.body);

    const saltRounds = 10;

    const hashPassword = await bcrypt.hashSync(password, saltRounds);

    const account = await accountService.addAccount(
        email,
        hashPassword,
        full_name
    );
    if (account) res.status(200).json(true);
    else res.status(200).json(false);
};

module.exports.checkIsExistByEmail = async (req, res) => {
    const { email } = req.params;
    const account = await accountService.getAccountByEmail(email);
    // console.log("accounts: ", account);
    if (account) res.status(200).json(true);
    else res.status(200).json(false);
};

module.exports.getAllAccounts = async (req, res) => {
    const accounts = await accountService.getAllAccounts();
    console.log("accounts: ", accounts);
    if (accounts) res.status(200).json(accounts);
    else res.status(200).json(false);
};
