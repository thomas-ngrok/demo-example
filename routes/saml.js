var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.headers);
  console.log(req.body);

  var user = req.headers['ngrok-saml-subject'];
  user ??= "stranger";

  var session = req.headers.cookie;
  session ??= "no session";

  const samlDetails = {
		samlSubject: user,
		sessionHeader: session
	}
	res.render('saml', samlDetails);
});

module.exports = router;
