const TokenService = require('./TokenService');

// Helper method to restrict a particular route only to valid tokens
function restrict() {
  return [
    (req, res, next) =>
      TokenService.verify(req.authToken)
        .then(data => {
          // console.log('token verified! decoded data ===>', data);
          res.locals.tokenData = data;
          next();
        })
        .catch(next), // next() is getting called with error
    (err, req, res, next) => {
      console.error('Error verifying token:', err);
      res.status(401).json(err);
    }
  ];
}

module.exports = {
  restrict
};
