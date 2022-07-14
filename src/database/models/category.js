const Category = (sequelize, DataTypes) => {
  /**
 * 
 * @param {import('sequelize').define} define 
 * @param {import('sequelize').Sequelize} Sequelize 
 */
const Category = sequelize.define("Category", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: DataTypes.STRING,
},
{
  timestamps: false,
}
);

return Category;
};

module.exports = Category;