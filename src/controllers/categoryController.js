const { create } = require('../services/categoryService');

const postCategory = async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  const service = await create(name);
  res.status(201).json(service);
};

module.exports = {
  postCategory,
};