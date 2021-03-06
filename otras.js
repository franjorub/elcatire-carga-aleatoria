const faker = require('faker');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('elcatire', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

const DetalleFactura = require('./models/detalle_facturas')(sequelize, Sequelize);
const Facturas = require('./models/facturas')(sequelize, Sequelize);
const PerrosCalientes = require('./models/perros_calientes')(sequelize, Sequelize);
const Bebidas = require('./models/bebidas')(sequelize, Sequelize);
const Ingredientes  = require('./models/ingredientes')(sequelize, Sequelize);
const PerrosIngredientes  = require('./models/perro_ingredientes')(sequelize, Sequelize);

Facturas.findAll().then(facturas => {
    PerrosCalientes.findAll().then( perrosCalientes => {
        Bebidas.findAll().then( bebidas => {
            for (let index = 0; index < 200; index++) {
                DetalleFactura.create({
                  facturas_id_factura: facturas[faker.random.number({min: 0, max: facturas.length - 1})].dataValues.id_factura,
                  bebidas_id_bebida: bebidas[faker.random.number({min: 0, max: bebidas.length - 1})].dataValues.id_bebida,
                  perros_calientes_tipos_id_tipo: perrosCalientes[faker.random.number({min:0, max: perrosCalientes.length - 1})].dataValues.tipos_id_tipo
                })
                
            }
        })
    })
})

Ingredientes.findAll().then(ingredientes => {
    PerrosCalientes.findAll().then( perrosCalientes => {
        for (let index = 0; index < 20; index++) {  
            PerrosIngredientes.create({
                cantidad: faker.random.number({min: 0, max: 99}),
                ingrendientes_id_ingrediente: ingredientes[faker.random.number({min: 0, max: ingredientes.length - 1})].dataValues.id_ingrediente,
                perros_calientes_tipos_id_tipo: perrosCalientes[faker.random.number({min:0, max: perrosCalientes.length - 1})].dataValues.tipos_id_tipo
            }).then(() => {}).catch(err => console.log('llaves repetidas, pasando al siguiente'))            
        }
    })
});