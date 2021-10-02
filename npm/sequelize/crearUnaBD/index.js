const express = require('express');
const { last } = require('lodash');
const morgan = require('morgan');
const {db,Op,Player,Team} = require('./db')

//ALTER - UPDATE
//FOERCE- true:CREATE, false:DO NOT CREATE
//Player.sync({force:true});//esto solo cargara el model de player
//Player.sync({alter:true});//esto solo actualizara el model de player
//db.sync({force:true})

const server = express();

server.use(express.json());
server.use(morgan('dev'));

//GET POST
server.post('./Team', async(req,res)=>{
    const newTeam = await Team.create({
        name:'henry'
    });
    res.send(newTeam);
})

//1 jugador muchos equipos
server.put('/multiple/:id',async(req,res)=>{
    const {id}=req.params;
    const {codeTeams} = req.body;
    const player = await Player.findByPk(id);
    await player.addTeams(codeTeams);
    res.send('done');
}) 


server.post('/player', async (req,res)=>{
//permite manipular antes de meter en la base de datos
//const jane = User.build({name:"Jane"});
//await jane.seve();

//lo mete directamente en la base de datos
//const jane= await User.create({name:"Jane"})
  const {firstName,lastName, username, age, cite, season, country} = req.body;
  try{
      const newPlayer = await Player.create({
          firstName,
          lastName,
          username,
          age,
          city,
          season,
          country
      });
      console.log(newPlayer.toJSON)
      res.json(newPlayer);
  }catch(e){
     res.send(e)
  }
});

server.get('/player',async(req,res)=>{
    const {name,lastName}=req.query;
    if(name && lastName){
      const player = await Player.findAll({
          /*SELECT firstName, birthday, username FROM player WHERE firstNAME=name and lastname=lastname */
          attributes:['firstName','birthday','username'],
          where:{
              [Op.and]:[
                  {firstName:name},
                  {lastName:lastName}
              ]
          }
      });
      res.send(player.length > 0 ? player : 'there are not player that matches')
    }else{
      const player = await Player.findAll();// devuelve un arreglo de objetos 
      res.send(players.length > 0 ? players : 'There are no players');
    }
})
//ENCUENTRA UN USER POR SU ID
server.get('/player/:id',async(req,res)=>{
    const{id}=req.params;
    try{
        const player = await Player.findByPk(id);
        res.json(player);
    }catch(e){
        res.send(e)
    }
})
//BUSCA O CREA UN USER POR SU ID
server.get('/player/findOrCreate',async(req,res)=>{
    const {firstName,lastName,username, season}= req.body;
    try{
        const [player,created] = await Player.findOrCreate({
            where:{username},
            default:{
                firstName,
                lastName,
                username,
                season
            }
        });
        res.json({created,player});
    }catch(e){
      res.send(e);
    }
    
});

server.put('/player/:name',async(req,res)=>{
    const {name}=req.params;
    let player = await Player.update(
        {
        firstName:'Martina'
        },
        {
         where:{firstName:name}
        }
    );
});

//destroy
server.delete('/player/:name', async(req,res)=>{
   //const jane = await User.create({name:"Jane"});
   //await jane.destroy();
   let{name} = req.params;
   const player = await Player.destroy({
       where:{firstName:name}
   })
   res.send('user eliminado');
});

server.listen(3000,()=>{
    console.log('server listening on port 3000')
    db.sync({force:false})
})