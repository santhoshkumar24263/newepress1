const express = require('express')
const app =express()
const contactPage=require('./contact')
const aboutPage=require('./about')
const servicePage=require('./service')
const loginPage=require('./login')
app.get('/',(request,response)=>{
  response.send('this is new page')

})

app.use("/service",servicePage)
app.use("/login",loginPage)
app.use('/about',aboutPage)
app.use('/contact',contactPage)
app.listen(3000)