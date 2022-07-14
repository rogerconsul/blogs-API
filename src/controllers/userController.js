const { postUser, getAllService, getByIdService } = require('../services/userService');

const create = async (req, res) => {
  const { body } = req;
  const call = await postUser(body);
  if (call.message) {
    return res.status(call.statusCode || call.status).json({ message: call.message });
  }
  return res.status(201).json({ token: call });
};

const getAll = async (_req, res) => {
  const payload = await getAllService();
  return res.status(200).json(payload);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const payload = await getByIdService(id);
  if (!payload) {
    return res.status(404).json({ message: 'User does not exist' });
  }
  return res.status(200).json(payload);
};

module.exports = {
  create,
  getAll,
  getById,
};