const {DataTypes} = require('sequelize')

//los models (define: modelnames, atribites,options)
module.exports = sequelize => sequelize.define('Player',{//connection instance,model name
    firstName:{
      type:DataTypes.STRING,
      get(){
          //como devuelvo cuando consultas
          return `Mi nombre es: ${this.getDataValue('firstName')}`
      },
      set(value){
          //como lo guardo en la db
          this.DataValue('password',hash(this.username) + value);
      }
      },
    lastName:{
      type:DataTypes.STRING
    },
    username:{
        type:DataTypes.STRING,
        allowNull:false,//NOT NULL
        unique:true
    },
    birthday:{
        type:DataTypes.DATEONLY, //MM/DD/YYYY
        defaultValue:DataTypes.NOW //DIA DE HOY
    },
    age:{
        type:DataTypes.STRING,
        validate:{
            min:18,
            max:90,
            isEven(value){
                if(value % 2 !== 0){
                throw new Error('Only even numbers are accepted')
                }
            }
        }
    },
    city:{
        type:DataTypes.STRING
    },
    coutry:{
        type:DataTypes.ENUM('Colombia','Uruguay','Argentina','Chile','Peru')
    },
    season:{
        type:DataTypes.ENUM('primavera','verano','invierno','oton:o')
    },
    fulName:{
        type:DataTypes.VIRTUAL,
        get(){
            return `${this.firsName}${this.lastName}`
        }
    }
  },/*options*/{
      timestamps:false
  });