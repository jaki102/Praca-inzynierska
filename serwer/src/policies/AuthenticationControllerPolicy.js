const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const format = {
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,62}')
      )
    }

    const {error} = Joi.validate(req.body, format)

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'You must provide a valid email address'
          })
          break
        case 'password':
          res.status(400).send({
            error: 'The password provided is wrong. Check that password contain at least 8 characters in length and not greater than 32 characters.'
          })
          break
        default:
          res.status(400).send({
            error: 'Invalid registration information'
          })
      }
    } else {
      next()
    }
  }
}
