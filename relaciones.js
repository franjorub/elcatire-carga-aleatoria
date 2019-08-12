const faker = require('faker');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('elcatire', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

const PerrosCalientes = require('./models/perros_calientes')(sequelize, Sequelize);
const Tipos = require('./models/tipos')(sequelize, Sequelize);
const Clientes = require('./models/clientes')(sequelize, Sequelize)
const Sucursales = require('./models/sucursales')(sequelize, Sequelize);
const Facturas = require('./models/facturas')(sequelize, Sequelize);

Tipos.findAll().then(tipos => {
    for (let index = 0; index < 3; index++) {
        PerrosCalientes.create({
            precio: faker.random.number({ min: 0, max: 100 }) + 10.3,
            tipos_id_tipo: tipos[faker.random.number({ min: 0, max: tipos.length - 1 })].dataValues.id_tipo
        });       
    }
});

Clientes.findAll().then(clientes => {
    Sucursales.findAll().then(sucursales => {
        for (let index = 0; index < 100; index++) {
            Facturas.create({
                fecha: faker.date.between('2019-07-01', '2019-09-01'),
                clientes_ci_cliente: clientes[faker.random.number({min: 0, max: clientes.length - 1})].dataValues.ci_cliente,
                sucursales_id_sucursal: sucursales[faker.random.number({min: 0, max: sucursales.length - 1})].dataValues.id_sucursal
            });
            
        }
    }).catch(err => console.log(err))
}).catch(err => console.log(err))

