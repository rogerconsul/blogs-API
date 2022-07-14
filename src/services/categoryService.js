const { Category } = require('../database/models');

const create = async (payload) => {
  const model = await Category.create({
    name: payload,
  });
  return model;
};

const getAll = async () => {
  const payload = await Category.findAll();
  return payload;
};

module.exports = {
  create,
  getAll,
};