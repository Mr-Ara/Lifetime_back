const expressValidator = require('express-validator');
const check = expressValidator.check;

module.exports = new class{
  registerValidator(){
    return[
      check('email').isEmail().withMessage("email is invalid"),
      check('name').notEmpty().withMessage("name field is Empty"),
      check('password').notEmpty().withMessage("password field is Empty")
  ]
  }

  loginValidator(){
    return[
      check('email').isEmail().withMessage("email is invalid"),
      check('password').notEmpty().withMessage("password field is Empty")
  ]
  }
}
