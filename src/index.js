// const express = require('express');

import express from 'express'

const app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', (req,res)=>{
    res.json({
        message: "Welcome to the jungle baby!"
    });
});

app.listen(app.get('port'));

console.log('Escuchando en el puerto...', app.get('port'));