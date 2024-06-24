const connectToMongo = require('./db');
var cors =require('cors')


connectToMongo();

const express = require('express');
const app = express();
const port = 5000;


app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
    res.send('Hello World!');
});

// app.get('/API/v/login', (req, res) => {
//     res.send('LOGIN!');
// });
// app.get('/API/v/signup', (req, res) => {
//     res.send('SIGNUP!');
// });
// this will work directly when u change with in the url's

app.use(express.json()) // this is used for the req ans


//Available Routes
app.use('/api/creden', require('./routes/creden'));
app.use('/api/notes', require('./routes/notes'));


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});



//you need to chnge the port everytime for to get new port
