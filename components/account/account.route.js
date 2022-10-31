const express = require("express");
const router = express.Router();
const accountController = require("./account.controller");

router.post("/add", accountController.addAccount);
router.get("/getAll", accountController.getAllAccounts);
router.get("/isExist/email/:email", accountController.checkIsExistByEmail);

module.exports = router;
