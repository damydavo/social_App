const express = require('express')
const { errorHandler } = require('./middleware/errorMiddleware')
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 8000

const connectDB = require('./database/config')


//connect to database
connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// app.get('/', (req, res) => {
//     res.status(201).json({message: 'This my first message'})
// })

app.use('/api/users', require('./routes/userRoutes'))

//error Handling
app.use(errorHandler)

app.listen(PORT, () => console.log(`app is listening on port ${PORT}`))