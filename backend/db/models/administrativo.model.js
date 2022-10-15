const { Model, DataTypes, Sequelize } = require('sequelize');

const ADMINISTRATIVO_TABLE = 'administrativo';

const AdministrativoSchema = {
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
      tableName: ADMINISTRATIVO_TABLE,
      modelName: 'Administrativo',
      timestamps: false,
    };
  }
}

module.exports = { ADMINISTRATIVO_TABLE, AdministrativoSchema, Tecnico };
