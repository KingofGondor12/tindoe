const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/auth', (req, res, next) => {
  req.session.loggedInDate = new Date().toLocaleString();
  res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ loggedIn: true, logInDate: req.session.loggedInDate}));
});

router.get('/secure', (req, res, next) => {
  if(loggedIn){
    req.session.loggedInDate = new Date().toLocaleString();
    res.setHead('Content-Type', 'application/json');
    res.send(JSON.stringify({ loggedIn: true, logInDate: req.session.loggedInDate}));
  } else {
    res.send({ loggedIn: false });
  }
})

module.exports = router;
