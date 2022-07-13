const User = (sequelize, DataTypes) => {
    /**
   * 
   * @param {import('sequelize').define} define 
   * @param {import('sequelize').Sequelize} Sequelize 
   */
  const User = sequelize.define("User", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING
  },
  {
    timestamps: false,
  }
  );

  return User;
};

module.exports = User;