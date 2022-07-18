const { create } = require('../services/postService');
// const xablau = require('../services/categoryService');

const blogpost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const user = req.headers.authorization;
  if (!title || !content || !categoryIds) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  const call = await create(title, content, categoryIds, user);

  return res.status(call.status).json(call.message);
};

module.exports = {
  blogpost,
};