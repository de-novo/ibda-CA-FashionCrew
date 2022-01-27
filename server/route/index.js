const express = require("express");
const router = express.Router();

const admin = require("./admin");
const adminUpload = require("./adminUpload");


router.use("/admin", admin().router);
router.use("/admin", adminUpload);

module.exports = router;
