<<<<<<< HEAD
const { app, BrowserWindow, ipcMain: ipc } = require("electron");
//hello testing to pull and push
let win;
function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    width: 1000,
    height: 800,
    fullscreen: false,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  // and load the index.html of the app.
  win.loadFile("views/welcome.html");
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

app.on("ready", () => {
  
  ipc.on("normal-mode", (event, { type }) => {
    win.loadFile("views/index.html");
  });
  
  ipc.on("admin-mode", (event, { type }) => {
    win.loadFile("views/admin.html");
  });

  ipc.on("enter-home", (event, { type }) => {
    win.loadFile("views/home.html");
  });
  
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
=======
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
>>>>>>> 29c9ea0f866651f29cf100e937c57241986cc01d
