const PostCategory = (sequelize, DataTypes) => {
  /**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 */
const PostCategory = sequelize.define("PostCategory", {
  postId: { 
    type: DataTypes.INTEGER, 
    primaryKey: true, 
    foreignKey: true },
  categoryId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    foreignKey: true,
  },
},
{
  timestamps: false,
  tableName: 'PostCategories'
}
);

PostCategory.associate = (models) => {
  models.Category.belongsToMany(models.BlogPost, {
    as: 'blogPosts',
    through: PostCategory,
    foreignKey: 'id',
    otherKey: 'id',
  });
  models.BlogPost.belongsToMany(models.Category, {
    as: 'categories',
    through: PostCategory,
    foreignKey: 'id',
    otherKey: 'id'
  })
}

return PostCategory;
};

/* tirado do course pra relembrar
ModelDeAssociação.associate = (models) => {
  models.ModelFonte.belongsToMany(models.ModelAlvo, {
    as: 'apelido_da_associação',
    through: ModelDeAssociação,
    foreignKey: 'id_da_fonte_na_tabela_da_associação',
    otherKey: 'id_do_alvo_na_tabela_da_associação',
  });

  [Será validado que o modelo em 'postCategory.js', através do(s) modelos(s) de nome(s) 'Category; BlogPost', define a associação 'belongsToMany' respectivamente, com o(s) modelo(s) de nome(s) 'BlogPost, Category']
*/

module.exports = PostCategory;