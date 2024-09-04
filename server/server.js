import express from 'express';
import expressPrometheusMiddleware from 'express-prometheus-middleware';
import cors from 'cors'

const app = express(); 

app.use(cors()); 
app.use((req, res, next) => {
    if(req.headers.authorization !== 'mysecrettoken') {
        return res.status(403).send('Forbidden'); 
    }
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
})

app.get('/time', (req, res) => {
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

    app.use(expressPrometheusMiddleware({
        metricsPath: '/metrics',
        collectDefaultMetrics: true
    }))

    }); 

    app.listen(8080); 