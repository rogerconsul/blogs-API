const { Category } = require('../database/models');

const create = async (payload) => {
  const model = await Category.create({
    name: payload,
  });
  return model;
};

module.exports = {
  create,
};