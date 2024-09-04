

const app = express (); 
var express = require('express'); 

app.get('/time', (requ, res) => {
    res.send({
        properties: {
            epoch: {
                description: Date.now(),
                type: 'number'
            }
        },
        required: ['epoch'],
        type: 'object'
    });

    }); 