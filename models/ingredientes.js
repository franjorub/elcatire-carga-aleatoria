/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ingredientes', {
    id_ingrediente: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    cantidad: {
      type: DataTypes.INTEGER(3),
      allowNull: false
    },
    unidad_medida: {
      type: DataTypes.ENUM('gr','ml','ud','oz'),
      allowNull: false
    }
  }, {
    tableName: 'ingredientes',
    timestamps: false,

  });
};
