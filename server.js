
const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

const indexRouter = require('./routes/index')
const aboutRouter = require('./routes/aboutus')
const collegedetailsRouter = require('./routes/collegedetails')
const dotenv = require('dotenv')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))
dotenv.config({path:'env'})

//DATABASE_URL = "mongodb+srv://:hello@dango.0lkqu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

app.use('/', indexRouter)
app.use('/aboutus', aboutRouter)
app.use('/collegedetails', collegedetailsRouter)
//app.use(bodyParser.urlencode({limit: '10mb', extended: false}))


/*const mongoose = require('mongoose')
mongoose.createConnection(DATABASE_URL, {
    useNewUrlParser: true 
})
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to mongoose'))
*/


app.listen(process.env.PORT || 3000)
