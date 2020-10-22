const express = require('express')

const app = express()

app.use(express.static(__dirname + '/views'));
app.set('view engine', 'ejs');
app.use(express.json());       
app.use(express.urlencoded()); 


app.get('/',(req,res)=>{
  res.render('welcome')
})

app.get('/admin',(req,res)=>{
  res.render('admin')
})

app.get('/home',(req,res)=>{
  res.render('home')
})

app.get('/index',(req,res)=>{
  res.render('index')
})

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log('Server started')
})