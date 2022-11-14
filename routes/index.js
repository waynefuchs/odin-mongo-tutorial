var express = require('express');
var router = express.Router();

router.get("/", (req, res, next) => {
  res.json({
    message: "Hello World! Environment Variable Test!",
    env_name: process.env.NAME,
    hmm: 123.45
  });
});

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;
