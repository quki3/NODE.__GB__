const {DataTypes} = require('sequelize')

module.exports = sequelize=> sequelize.define('Team',{//connection istance,model name
    code:{
      type:DataTypes.UUID,
      defaultValue:DataTypes.UUID,
      primaryKey:true
      },
    lastName:{
      type:DataTypes.STRING
    }
  },/*options*/{});