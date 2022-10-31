const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('account', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(400),
      allowNull: false
    },
    full_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    is_deleted: {
      type: DataTypes.SMALLINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'account',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "account_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
