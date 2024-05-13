const Joi = require("joi");

const registerValidation = (data) => {
  const schema = Joi.object({
    username: Joi.alternatives().try(
      Joi.string().required().email(),
      Joi.string().min(6).required()
    ),
    password: Joi.string().min(6).required(),
  });
  return schema.validate(data);
};

const loginValidation = (data) => {
  const schema = Joi.object({
    username: Joi.alternatives().try(
      Joi.string().required().email(),
      Joi.string().min(6).required()
    ),
    password: Joi.string().min(6).required(),
  });
  return schema.validate(data);
};

const passwordValidate = (data) => {
  const schema = Joi.object({
    password: Joi.string().min(6).required(),
  });
  return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
module.exports.passwordValidate = passwordValidate;
