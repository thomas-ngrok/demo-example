var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({"hello": 
    Date.now()
  
});
});

router.get('/900', function(req, res, next) {

  res.status(900).send();

});

router.post('/slack', function(req, res, next) {

  res.send(req.body);

});

router.all('/pagerduty', function(req, res, next){
  res.json({"hello pagerduty": "I'm ready for webhoooks",
    "time": Date.now(),
});
});

module.exports = router;
