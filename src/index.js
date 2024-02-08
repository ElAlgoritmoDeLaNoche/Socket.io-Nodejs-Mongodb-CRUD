import express from 'express'
import { Server as WebsocketServer } from 'socket.io'
import http from 'http'
import { fileURLToPath } from 'url'
import path from 'path'
import { connectDB } from './db.js'
import { PORT } from './config.js'

const app = express()
connectDB()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
app.use(express.static(path.join(__dirname, 'public')))

const server = http.createServer(app)

const httpServer = server.listen(PORT)

const io = new WebsocketServer(httpServer)

console.log('Server on http://localhost:', PORT)