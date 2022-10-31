const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const authService = require("./auth.service");

module.exports.login = async (req, res) => {
    const { email, password } = req.body;
    const account = await authService.login(email, password);
    console.log("account login: ", account);

    if (!account) {
        res.status(200).json(false);
        return;
    }
    const accessToken = jwt.sign(account, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "3000s",
    });

    res.status(200).json({ account, accessToken });
};

module.exports.logout = async (req, res) => {
    // const authorizationHeader = req.headers["authorization"];
    // if (!authorizationHeader) res.status(200).json(false);

    // const token = authorizationHeader.split(" ")[1];
    // if (!token) res.status(200).json(false);

    res.status(200).json(true);
};

module.exports.authenToken = async (req, res, next) => {
    const authorizationHeader = req.headers["authorization"];
    if (!authorizationHeader) {
        res.status(200).json(false);
        return;
    }

    const token = authorizationHeader.split(" ")[1];
    if (!token) {
        res.status(200).json(false);
        return;
    }

    await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, data) => {
        if (err) res.status(200).json(false);
        else {
            next();
        }
    });
};

module.exports.getCurrentAccount = async (req, res, next) => {
    const authorizationHeader = req.headers["authorization"];
    if (!authorizationHeader) res.status(200).json(false);

    const token = authorizationHeader.split(" ")[1];
    if (!token) {
        res.status(200).json(false);
        return;
    }

    await jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        async (err, data) => {
            if (err) {
                console.log("err: ", err);
                res.status(200).json(false);
            } else {
                res.status(200).json({
                    email: data.email,
                    full_name: data.full_name,
                });
            }
        }
    );
};
