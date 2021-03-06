const express = require('express')
const OngController = require('./controllers/OngController')    
const IncidentController = require('./controllers/IncidentController')
const ProfilleController = require('./controllers/ProfilleController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router()

routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create)
routes.post('/incidents', IncidentController.create)
routes.get('/incidents', IncidentController.index)
routes.delete('/incidents/:id', IncidentController.delete)
routes.get('/profile', ProfilleController.index)
routes.post('/session', SessionController.create)

module.exports = routes