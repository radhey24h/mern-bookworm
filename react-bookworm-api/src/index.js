import express from 'express';
import path from 'path';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import auth from './router/auth';


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

dotenv.config({path: __dirname + '/.env'});

console.log(process.env.MONGODB_URL)

mongoose.connect(process.env.MONGODB_URL, function (err) {
    if (err) throw err;
});
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

app.use(cors());

app.use('/api/auth', auth);

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(8080, () => console.log('running on the localhost:8080'));


// app.post('/api/auth', (req, res) => {
//     res.status(400).json({ error: { global: 'invalid credentials..!!!' } })
// })

