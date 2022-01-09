const express = require('express')
const jwt = require('jsonwebtoken')
const Candidat = require('./Models/Candidat')
const router = express.Router()

var list_cands=router.get('/candidats',(req,res)=>{
    Candidat.findAll({attributes:["cin","nom","prenom"]}).then((candidats)=> res.json(candidats)) 
})
//fin methode list_candidats-----------------------------------------------------------------
var login_candidat=router.post('/login_candidat',  (req, res) => {
    Candidat.findOne({
        attributes:["cin","nom","prenom"],
      where: {
        cin:req.body.cin,
        mot_de_passe : req.body.mot_de_passe,
        etat_compte : 1
       }
     } )
  .then(candidat=>{
    if (candidat!==null)
    { const id =candidat.cin
      const token =jwt.sign({ id }, 'shhhhh',{ expiresIn: '1h' })
      res.json({candidat:candidat,token:token})
    }else{
      res.json({message:"vérifiez vos coordonnées"})
    }
  })
  .catch(err=>{
    res.json(err)
  })
 })
 //fin methode login_candidats-----------------------------------------------------------
 var inscription_candidat = router.post('/inscription_candidat',(req,res)=>{
    var id = req.body.cin
    
    Candidat.update({mot_de_passe:req.body.mot_de_passe,etat_compte:1},{
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
      }else if(nb==0){
        res.json({message:"veuillez vérifier vos coordonnées"})
      }
      
}).catch(err=>{
  res.json({err:err})
}) 
})
//fin methode inscription_candidats-----------------------------------------------------------

var test = router.post('/test',(req,res)=>{
  var id =req.body.cin
  Candidat.update({mot_de_passe:req.body.mot_de_passe},{
    where:{
      cin:req.body.cin
    }
  }).then(num=>{
    if (num==0)
    res.json({message:"veuillez vérifier vos coordonnées"})
    else if(num >0){
      const token =jwt.sign({ id }, 'shhhhh',{ expiresIn: '1h' })
      res.json({token:token,num : num})
    }
  }).catch(err=>{
    res.json({err:err})
  })
  
})
//-------------------------------
/*var test = router.post('/test',(req,res)=>{
  Candidat.update({mot_de_passe:req.body.mot_de_passe},{
    where:{cin:req.body.cin}
  }).then(Candidat.findOne({
    attributes:["cin","nom","prenom","etat_vote","mot_de_passe"],
    where:{
      cin : req.body.cin
    }
  }).then(candidat=>{
    res.json({candidat:candidat})
  }).catch(err2=>{
    res.json({err2:err2})
  })
  ).catch(err1=>{
    res.json({error:err1})
  })
})*/
exports.test=test
exports.list_cands = list_cands
exports.login_candidat = login_candidat
exports.inscription_candidat = inscription_candidat