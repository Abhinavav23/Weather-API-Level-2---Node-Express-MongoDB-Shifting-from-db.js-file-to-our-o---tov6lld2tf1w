const jwt = require('jsonwebtoken');
const JWT_SECRET = 'newtonSchool';

function isLoggedIn(req, res, next) {
  // console.log("running isloggedin");
  // console.log("req.headers.authorization", req.headers.authorization);
  const token = req.headers.authorization.split(' ')[1];
  // console.log("token", token);

  if (!token) {
    return res.status(401).json({
      message: 'Authentication failed: Missing token.',
      status: 'error',
    });
  }

  try {
    const decodedToken = jwt.verify(token, JWT_SECRET);
    // console.log("decodedToken", decodedToken);
    next();
  } catch (err) {
    // console.log(err);
    return res.status(401).json({
      // message: 'Authentication failed: Invalid token.',
      status: 'error',
      message: err.message
    });
  }
}

module.exports = isLoggedIn;
