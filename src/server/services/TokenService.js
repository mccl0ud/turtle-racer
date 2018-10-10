const jwt = require('jsonwebtoken');
require('dotenv').config();

class Token {
  // Checks if the token is valid
  verify(token) {
    return new Promise((resolve, reject) =>
      jwt.verify(token, process.env.SECRET, (err, data) => (err ? reject(err) : resolve(data)))
    );
  }

  // Parses the token from the request
  receiveToken(req, res, next) {
    if (req.headers.authorization) {
      req.authToken = req.headers.authorization.replace(/^Bearer\s/, '');
    }
    next();
  }

  // Checks for JWT in header to restrict routes
  checkAuth(req, res, next) {
    try {
      const token = req.headers.authorization.split(" ")[1];
      console.log(token);
      const decoded = jwt.verify(token, process.env.SECRET)
      req.userData = decoded;
      next();
    } catch (error) {
      return res.status(401).json({
        message: 'Auth Failed'
      });
    }
  };

  // Decodes token according to token headers
  decode(token) {
    return jwt.decode(token);
  }

  sendToken(req, res, next) {
    res.status(200).json({
      message: "Auth successful", 
      token: res.locals.token
    });
    // next();
  }

  // Middleware for creating token
  createToken(req, res, next) {
    jwt.sign(
      {
        user: res.locals.newTokenData
      },
      process.env.SECRET,
      {
        expiresIn: "1h"
      },
      (err, jwt) => {
      if (err) console.error('Error in TokenService.createToken:', err);
      res.locals.token = jwt;
      next();
    });
  }
}

module.exports = new Token();
