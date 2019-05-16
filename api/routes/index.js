var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.send("Welcome to Nexus API 1.0.0");
})


module.exports = router;
