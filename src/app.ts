import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Web crawler is running...');
});

export default app;
