const Joi = require('joi'); 
const { User } = require('../database/models');
const { generateTokenAtPost } = require('./loginService');

const validateBody = async (obj) => {
  const schema = Joi.object({
    displayName: Joi.string().required().min(8),
    email: Joi.string().required().email(),
    password: Joi.string().min(6).required(),
    image: Joi.string(),
  });
  const result = schema.validate(obj);
  try {
    if (result.error) {
      const error = new Error(result.error.message);
      error.statusCode = 400;
      throw error;
    }
  } catch (error) {
    return error;
  }
  return result.value;
};

const allValid = async (email, password) => {
  const result = await generateTokenAtPost(email, password);
  return result;
};

const postUser = async (body) => {
 const { displayName, email, password, image } = body;

 const user = await User.findOne({
  where: { email },
});
if (user) {
  return { status: 409, message: 'User already registered' };
}
  const check = await validateBody(body);

  if (!check.statusCode) {
  await User.create({
    displayName,
    email,
    password,
    image,
  });
  return allValid(email, password);
}
  return check;
};

module.exports = {
  postUser,
};