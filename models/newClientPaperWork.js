const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/connection');

try {
  class NewClientPaperWork extends Model {}
  NewClientPaperWork.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      client_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      contact_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      contact_email: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      contact_phone_number: {
        type: DataTypes.STRING,
        allowNull: true,
      }
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'newClientPaperWork',
    }
  );
  
  module.exports = NewClientPaperWork;
} catch(err) {
  console.log(`Model Error: ${ err }`);
}