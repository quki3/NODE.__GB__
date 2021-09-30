# sequelize
## conectando a una base de datops
```javascript
const {Secuelize} = require('sequelize');

//conectamos a una base de datos 1 (connection URI)
//nombredeuser y password proviene de la instalacion de postgres
const sequelize = new Sequelize('postgres://nombredeuser:password@localhost:3000/nombredelabasededatosaconectar');

//conectamos a una base de datos 2 (Parametros separados)
const sequelize = new Sequelize('database', 'username', 'password', {
                                                                    host:'localhost',
                                                                    dialect:/*one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
                                                                    });l



//check si se conecto a la base de datos
sequelize.authenticate()
                        .then(()=>console.log('success'))
                        .catch(e=>console.log(e))
                        
 //los models (define: modelnames, atribites,options)
 const User = sequelize.define('User',{//connection istance,model name
  firstName:{
    type:DataTypes.STRING
    },
  lastName:{
    type:DataTypes.STRING
  }
},/*options*/{});
 const Team = sequelize.define('Team',{//connection istance,model name
  firstName:{
    type:DataTypes.STRING,
    primaryKey:true
    },
  lastName:{
    type:DataTypes.STRING
  }
},/*options*/{});

```

# Model

```javascript
//1
const User = sequelize.define('User',{//connection istance,model name
  firstName:{
    type:DataTypes.STRING
    },
  lastName:{
    type:DataTypes.STRING
  }
});
//2
class User extends Model {}
User.init({
    firstName:{
      type:DataTypes.STRING
    },
    lastName:{
      type:DataTypes.STRING
    }
},{
  sequelize,//connection instance
  modelName:'User'//model name
  });
```

