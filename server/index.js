import http from 'http'
import path from 'path'
import express from 'express'

const app = express()

const server = http.createServer(app)

//Declare port
const PORT = process.env.PORT || 8080
app.set('port', (process.env.PORT || PORT))

// Static folder
app.use(express.static(path.join(__dirname, '../public')))

// Run
server.listen(PORT, () => console.log(`Listening on port ${PORT}`))