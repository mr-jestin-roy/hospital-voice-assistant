const express = require('express')
const cors = require('cors')
const app = express()

require('dotenv').config()

const { Deta } = require('deta');
const deta = new Deta(process.env.PROJECT_KEY)
const db = deta.Base("hospital-data")

app.use(cors())
app.use(express.static(__dirname + '/views'));
app.set('view engine', 'ejs');
app.use(express.json());       
app.use(express.urlencoded()); 

app.get('/',(req,res)=>{
  res.render('welcome')
})

app.get('/admin', async (req,res)=>{
  const data = await db.fetch().next();
  console.log(data)
  res.render('admin',{data:JSON.stringify(data)})
})

app.get('/form',(req,res)=>{
  res.render('form')
})

app.get('/home',(req,res)=>{
  res.render('home')
})

app.post('/post',async (req,res)=>{
  

  await db.put({
    name: req.body.name,
    address: req.body.address,
    phone: req.body.phone,
    block: req.body.block,
    room: req.body.room,
    type:req.body.type,
    time:req.body.time
  })

  //Ennit we send the response back 
  res.render('home')
})

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log('Server started')
})
