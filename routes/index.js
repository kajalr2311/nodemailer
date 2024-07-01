var express = require('express');
var router = express.Router();
const {sendMail} = require("../utils/sendmail");
const userschema = require("../models/userschema");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'home page' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'about' });
});

router.get('/register', function(req, res, next) {
  res.render('register', { title: 'wlc register' });
});

router.post('/register', function(req, res, next) {
  res.sendMail('register', { title: 'wlc register' });
});

router.post("/send-mail", function (req, res, next) {
  sendMail(req, res);
});

module.exports = router;
