const Router = require('express').Router;

const {tokenGenerator, voiceResponse} = require('./handler');

const router = new Router();

/**
 * Generate a Capability Token for a Twilio Client user - it generates a random
 * username for the client requesting a token.
 */
router.get('/token', (req, res) => {
  res.send(tokenGenerator());
});

router.post('/voice', (req, res) => {
  res.set('Content-Type', 'text/xml');
  console.log('req.body', req.body);
  console.log('req.body.To', req.body.To);
  const result = voiceResponse(req.body.To);
  console.log('/voice', result);
  res.send(result);
});

module.exports = router;
