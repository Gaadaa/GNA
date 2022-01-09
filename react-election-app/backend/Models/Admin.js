const { Sequelize } = require('sequelize/dist')
const sequelize = require('../db')
const Admin = sequelize.define('admin', {
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
}
})
module.exports = Admin