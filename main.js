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

app.post('/post',(req,res)=>{
  //@George, ivide body full aayit print cheythal enter cheytha ellam kittum
  console.log(req.body)

  //We can also do like this
  console.log(req.body.name)

  //Here we are calling it by the 'name' tag we gave inside <input> in the html form
  //avide <input ... name='address' > enn aanenkil we can say req.body.address

  //Ini here we can send all this data to Firebase and store it there
  // ... 

  //Ennit we send the response back 
  res.render('index')
})

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log('Server started')
})
