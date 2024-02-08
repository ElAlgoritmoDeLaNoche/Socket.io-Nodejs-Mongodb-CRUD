import { config } from 'dotenv'
config()

export const PORT = process.env.PORT || 5003
export const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/socketsdb'