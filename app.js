const express = require('express')
const app=express()
const port = process.env.PORT||3000;
const moment = require('moment')
app.locals.moment = moment;


app.use(express.static('public'))
app.set('view engine','ejs')

app.use(express.urlencoded({ extended: true }));
app.use('/',require('./routes/news'))

app.set('views','./views')

app.listen(port,()=> console.log("Server Up and Running."))