const express = require('express')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const connectDB = require('./config/database')

const authRoutes = require('./routes/auth')
const homeRoutes = require('./routes/home')
const projectsRoutes = require('./routes/projects')
const tasksRoutes = require('./routes/tasks')
const teamsRoutes = require('./routes/teams')

require('dotenv').config({path: './config/.env'})

// Passport config
require('./config/passport')(passport)

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Sessions
app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
  )
  
// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

  
app.use('/', homeRoutes)
app.use('/auth', authRoutes)
app.use('/projects', projectsRoutes)
app.use('/tasks', tasksRoutes)
// app.use('/teams', teamsRoutes)

 
app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better catch it!')
})    