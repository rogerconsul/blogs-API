const { generateToken } = require('../services/loginService');

const loginController = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  const token = await generateToken(email, password);
  if (token.status) {
    return res.status(token.status).json({ message: token.message });
  }  
  return res.status(200).json({ token });
};

module.exports = loginController;