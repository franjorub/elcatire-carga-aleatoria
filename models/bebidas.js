/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bebidas', {
    id_bebida: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    precio: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  }, {
    tableName: 'bebidas',
    timestamps: false,

  });
};
