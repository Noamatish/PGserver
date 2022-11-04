var express = require("express");
const { WL } = require("./address");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  console.log(WL);
  res.render("index", { title: "Express" });
});

module.exports = router;
