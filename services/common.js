const passport = require('passport');

exports.isAuth = (req, res, done) => {
  return passport.authenticate('jwt');
};

exports.sanitizeUser = (user) => {
  return { id: user.id, role: user.role };
};

exports.cookieExtractor = function (req) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies['jwt'];
  }
  //TODO : this is temporary token for testing without cookie
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OTA1YTE0NWY1YzkzOWY4MzYxYmZhNyIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjg3MjQ3NTI5fQ.0dkhk8RWdjF48p8dNA_uxz56IlDGknAaxWBsudYD3NM"
  return token;
};