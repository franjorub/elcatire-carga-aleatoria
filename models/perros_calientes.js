/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('perros_calientes', {
    precio: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    tipos_id_tipo: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'tipos',
        key: 'id_tipo'
      }
    }
  }, {
    tableName: 'perros_calientes',
    timestamps: false,

  });
};
