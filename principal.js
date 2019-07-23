const faker = require('faker');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('elcatire', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

const Clientes = require('./models/clientes')(sequelize, Sequelize)
const Sucursales = require('./models/sucursales')(sequelize, Sequelize);
const Tipos = require('./models/tipos')(sequelize, Sequelize);
const Bebidas = require('./models/bebidas')(sequelize, Sequelize);
const Ingredientes  = require('./models/ingredientes')(sequelize, Sequelize);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');    
    
    for (let index = 0; index < 30; index++) {
        Clientes.create({    
            ci_cliente: '' + faker.random.number({min: 100, max: 9999}),
            nombre: faker.name.firstName(),
            apellido: faker.name.lastName(),
            direccion: faker.address.streetAddress(),
            sexo: faker.random.boolean() ? 'M' : 'F',
            telefono: faker.phone.phoneNumber()
        });           
    }

    for (let index = 0; index < 4; index++) {
        Sucursales.create({
            nombre: faker.address.city(),
            direccion: faker.address.streetAddress(),
            telefono: faker.phone.phoneNumber()
        })    
    }

    for (let index = 0; index < 5; index++) {
        Tipos.create({
            nombre: faker.address.country(),
        })
    }

    for (let index = 0; index < 5; index++) {
        Bebidas.create({
            nombre: faker.random.word(),
            precio: 10.3
        })
    }

    for (let index = 0; index < 5; index++) {
        Ingredientes.create({
            nombre: faker.random.word(),
            cantidad: faker.random.number({ min: 0, max: 999 }),
            unidad_medida: 'gr'
        })
    }

    

  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

