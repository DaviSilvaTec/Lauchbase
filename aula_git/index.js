const express =require('express');

const app = express();

app.get('/teste', (req, res)=> {
    return res.json({hello: 'Wordl'})
});

app.listen(4000);