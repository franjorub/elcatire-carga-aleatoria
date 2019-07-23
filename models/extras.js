/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('extras', {
    detalle_facturas_id_detalle_factura: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'detalle_facturas',
        key: 'id_detalle_factura'
      }
    },
    ingredientes_id_ingrediente: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'ingredientes',
        key: 'id_ingrediente'
      }
    }
  }, {
    tableName: 'extras'
  });
};
