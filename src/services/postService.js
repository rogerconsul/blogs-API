const JWT = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;
const { Sequelize, BlogPost, Category, PostCategory } = require('../database/models');

const createPostCategory = async (postId, categoryId) => {
  categoryId.map(async (id) => {
  await PostCategory.create({
    postId,
    categoryId: id,
  });
});
};

const create = async (title, content, ids, user) => {
  const { data } = await JWT.verify(user, secret);
   const verify = await Category.findAll({
    where: { id: { [Sequelize.Op.in]: ids } }, // https://www.codegrepper.com/code-examples/javascript/how+to+pass+array+in+op.in+sequelize
    });
  if (verify.length !== ids.length) {
    return { status: 400,
      message: { message: '"categoryIds" not found' },
    };
  }
  const createPost = await BlogPost.create({
    title,
    content,
    userId: data.id,
  });
  
  await createPostCategory(createPost.id, ids);

  return { status: 201, message: createPost };
};

module.exports = {
  create,
  createPostCategory,
};