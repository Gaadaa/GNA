const { Sequelize } = require('sequelize')
const sequelize = require('../db')
const Candidat = sequelize.define('candidat', {
cin : {
    type : Sequelize.STRING
},

nom : {
    type : Sequelize.STRING
},
prenom : {
    type : Sequelize.STRING
},
mot_de_passe : {
    type : Sequelize.STRING
},
nb_vote : {
    type : Sequelize.INTEGER
},
etat_compte : {
    type : Sequelize.INTEGER
}
})
module.exports = Candidat