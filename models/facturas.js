/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('facturas', {
    id_factura: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false
    },
    clientes_ci_cliente: {
      type: DataTypes.STRING(10),
      allowNull: false,
      references: {
        model: 'clientes',
        key: 'ci_cliente'
      }
    },
    sucursales_id_sucursal: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'sucursales',
        key: 'id_sucursal'
      }
    }
  }, {
    tableName: 'facturas',
    timestamps: false,

  });
};
