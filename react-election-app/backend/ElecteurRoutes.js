const express = require('express')
const Electeur = require('./Models/Electeur')
const jwt = require('jsonwebtoken')


const router = express.Router()
var list_elect=router.get('/electeurs',(req,res)=>{
    Electeur.findAll({attributes:["cin","nom","prenom"]}).then((electeurs)=> res.json(electeurs)) 
})

var login_electeur=router.post('/login_electeur',  (req, res) => {
    Electeur.findOne({
        attributes:["cin","nom","prenom"],
      where: {
        cin:req.body.cin,
        mot_de_passe : req.body.mot_de_passe,
        etat_compte : 1
       }
     } )
  .then(electeur=>{
    if(electeur !== null){
      const id = electeur.cin
      const token =jwt.sign({ id }, 'shhhhh',{ expiresIn: '1h' })
      res.json({electeur:electeur,token:token})
    }
    else{
      res.json({message:"vérifiez vos coordonnées"})
    }
  })
  .catch(err=>{
    res.json(err)
  })
 })
 //----------------fin login------------------------------------------------
var inscription_electeur = router.post('/inscription_electeur',(req,res)=>{
    var id = req.body.cin
    
    Electeur.update({mot_de_passe:req.body.mot_de_passe,etat_compte:1},{
        where:{
            cin : req.body.cin,
            nom:req.body.nom,
            prenom:req.body.prenom,
            etat_compte:0
        }
    }).then(nb=>{
      if(nb>0){
        const token =jwt.sign({ id }, 'shhhhh',{ expiresIn: '1h' })
        res.json({token : token})
      }
      else if(nb==0){
        res.json({message:"veuillez vérifier vos coordonnées"})
      }     
}).catch(err=>{
  res.json({err:err})
}) 
})
//-------------------------------- inscription electeur------------------------

 

exports.list_elect = list_elect
exports.login_electeur = login_electeur
exports.inscription_electeur = inscription_electeur
 