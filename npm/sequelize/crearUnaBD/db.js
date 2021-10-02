const {Sequelize, Op} = require ('sequelize');
const modelPlayer = require('./Model/Player')
const modelTeam = require('./Model/Team')

//conectamos a una base de datos 1 (connection URI)
//nombredeuser y password proviene de la instalacion de postgres
const sequelize = new Sequelize('postgres://nombredeuser:password@localhost:3000/nombredelabasededatosaconectar',{
                             //default
                             logging:console.log,
                             
                             //muestra info adicional mas alla de la query sql
                             loggig:(...msg)=>console.log(msg),
                             
                             //Deshabilita el logging
                             logging:false,
});
//check si se conecto a la base de datos
sequelize.authenticate()
                        .then(()=>console.log('success'))
                        .catch(e=>console.log(e))

//crea los modelos pero no hace el sync
modelPlayer(sequelize)
modelTeam(sequelize)


console.log(sequelize.model);
const {Player,Team} = sequelize.models;


module.exports = {
    Op,
    ...sequelize.models,
    db:sequelize
}