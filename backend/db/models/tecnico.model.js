const { Model, DataTypes, Sequelize } = require('sequelize');

const TECNICO_TABLE = 'tecnico';

const TecnicoSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  position: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'customer',
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.fn('NOW'),
  },
};

class Tecnico extends Model {
  static associate(models) {
    //associate
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: TECNICO_TABLE,
      modelName: 'Tecnico',
      timestamps: false,
    };
  }
}

module.exports = { TECNICO_TABLE, TecnicoSchema, Tecnico };
