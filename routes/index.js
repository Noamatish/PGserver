var express = require("express");
const { WL } = require("./address");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.json(WL);
});

module.exports = router;
