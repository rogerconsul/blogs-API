const { postUser } = require('../services/userService');

const create = async (req, res) => {
  const { body } = req;
  const call = await postUser(body);
  if (call.message) {
    return res.status(call.statusCode || 400).json({ message: call.message });
  }
  return res.status(201).json({ token: call });
};

module.exports = {
  create,
};