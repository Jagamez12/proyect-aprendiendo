const express = require('express')
const morgan = require('morgan')
const path = require('path')

const { mongoose } = require('./database')

const app = express()

// Settings

app.set('port',process.env.PORT || 3000)

// Middlewares
app.use(morgan('dev'))

app.use(express.json())  // verificar que lo que se envie sera tipo JSON
// Routes

app.use('/api/task' ,require('./routes/task.routes'))

// Static files

app.use(express.static(path.join(__dirname, 'public')))

// start the server
app.listen(3000, () => {
    console.log(`Server listening on port ${app.get('port')}`)
})