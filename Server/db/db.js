const mongoose = require('mongoose')

const uri = process.env.DB_HOST

mongoose.connect(uri)
const db = mongoose.connection

db.on('error', (error) => console.error(error))
db.once('open', () => console.log("Connected to MongoDB"))