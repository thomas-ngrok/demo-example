var express = require('express');
var router = express.Router();
var MessagingResponse = require('twilio').twiml.MessagingResponse;


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

router.all('/sms', function(req, res, next){
  console.log("Request Headers:");
  console.log(req.headers);
  console.log("Request Body: ");
  console.log(req.body);

  const twiml = new MessagingResponse();

  twiml.message('The Robots are coming! Head for the hills!');

  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
});

module.exports = router;
