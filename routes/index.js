var express = require('express');
var router = express.Router();

/* GET home page */
router.get('/', function(req, res) {
  res.render('index', {
  	name: 'Philippe Roy',
  	title: 'Web Developer'
  	});
});

/* GET Projects Page */
router.get('/someMoreThings', function(req, res) {
  res.render('projects', {});
});

module.exports = router;
