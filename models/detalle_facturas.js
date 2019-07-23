/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('detalle_facturas', {
    id_detalle_factura: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    facturas_id_factura: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'facturas',
        key: 'id_factura'
      }
    },
    bebidas_id_bebida: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'bebidas',
        key: 'id_bebida'
      }
    },
    perros_calientes_tipos_id_tipo: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'perros_calientes',
        key: 'tipos_id_tipo'
      }
    }
  }, {
    tableName: 'detalle_facturas',
    timestamps: false,

  });
};
