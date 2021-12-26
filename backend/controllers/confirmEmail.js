const User=require('../models/user')
const jwt=require('jsonwebtoken')
module.exports.confirmEmail = (req, res) => {
    User.findOne({
      confirmationCode: req.params.code,
    })
      .then((user) => {
        if (!user) {
          return res.status(404)
        }
  
        user.verified = true
        user.save((err) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }
        });
      })
      .catch((e) => {console.log("error", e)
        return});
        res.status(200).send('<h1>Account verified, please <a href="http://localhost:3000/login">login</a></h1>')
  };