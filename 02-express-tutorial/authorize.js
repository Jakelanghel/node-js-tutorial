const authorize = (req, res, next) => {
  console.log("AUTH");
  next();
};

module.exports = authorize;
