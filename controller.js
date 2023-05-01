const userModel = require("./model");
const register = (req, res) => {
  console.log(req.body);
  const { username,password, repassword } = req.body;

  const newUser = new userModel({
    password,
    username,
    repassword
  });
  newUser
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(400)
      son(err);
    });
};
module.exports = register;
