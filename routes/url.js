const express = require("express");

const {
    handleGenerateNewShorturl,
} = require("../controllers/url");

const router = express.Router();

router.post("/", handleGenerateNewShorturl);

module.exports = router;