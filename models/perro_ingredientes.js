/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('perro_ingredientes', {
    cantidad: {
      type: DataTypes.INTEGER(3),
      allowNull: false
    },
    ingrendientes_id_ingrediente: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'ingredientes',
        key: 'id_ingrediente'
      }
    },
    perros_calientes_tipos_id_tipo: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'perros_calientes',
        key: 'tipos_id_tipo'
      }
    }
  }, {
    tableName: 'perro_ingredientes'
  });
};
