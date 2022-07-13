const jwt = require('jsonwebtoken');
const { User } = require('../database/models');

const secret = process.env.JWT_SECRET;

const userExists = async (email, password) => {
  const user = await User.findOne({
    where: { email },
  });
  if (!user || user.password !== password) {
    return false;
  }
  return user;
};

const generateToken = async (email, password) => {
  const verifica = await userExists(email, password);
  try {
    if (!verifica) {
      throw new Error();
    }
    const payload = { data: verifica };
    return jwt.sign(payload, secret);
  } catch (error) {
    return {
      status: 400,
      message: 'Invalid fields',
    };
  }    
  };

const generateTokenAtPost = async (email, _password) => {
    const payload = { data: email };
    const token = await jwt.sign(payload, secret);
    return token;
  };

module.exports = {
  generateToken,
  generateTokenAtPost,
};
