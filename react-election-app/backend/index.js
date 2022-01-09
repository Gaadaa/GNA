const express = require('express')
const cors = require ('cors')
const app = express()
var electeur_routes = require('./ElecteurRoutes')
var candidat_routes = require('./CandidatRoutes')
const bodyParser=require('body-parser')
app.use(bodyParser.json())
app.use(express.json())
app.use(cors())
let port = process.env.PORT || 3001
//---------------------------------------------------------------
app.get('/electeurs',electeur_routes.list_elect)
app.post('/login_electeur',electeur_routes.login_electeur)
app.post('/inscription_electeur',electeur_routes.inscription_electeur)
//-----------fin des méthodes des electeurs----------------------
app.get('/candidats',candidat_routes.list_cands)
app.post('/login_candidat',candidat_routes.login_candidat)
app.post('/inscription_candidat',candidat_routes.inscription_candidat)
app.post('/test',candidat_routes.test)
//-----------fin des méthodes des candidats----------------------
app.listen(port,()=>{
    console.log("server connected")
    
})