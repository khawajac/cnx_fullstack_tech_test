import express from 'express';

const app = express(); 

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

    app.listen(8080); 