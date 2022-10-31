const express = require("express");
const router = express.Router();
const authController = require("./auth.controller");

router.post("/login", authController.login);
router.post("/logout", authController.logout);
router.get("/getCurrentAccount", authController.getCurrentAccount);
// router.post("/add", accountController.addAccount);
// router.get("/isExist/email/:email", accountController.checkIsExistByEmail);

module.exports = router;
