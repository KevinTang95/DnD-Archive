const express = require('express');
const app =express();
const port=3000;

app.get('/', (req, res)=>{
    res.sendFile(__dirname+'/layouts/index.html')

})

app.listen(port, ()=>{
    console.log(`Port ${port} wird ausgeführt`)
})