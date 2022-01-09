const { Sequelize } = require('sequelize/dist')
const sequelize = require('../db')
const Electeur = sequelize.define('electeur', {
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
etat_vote : {
    type : Sequelize.INTEGER
},
etat_compte : {
    type : Sequelize.INTEGER
}
})
module.exports = Electeur