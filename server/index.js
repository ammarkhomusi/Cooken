const express = require ('express');
const app = express();
const router = require('./router.js');
const cors = require('cors');

// const session = require('express-session');
//const SECRET = process.env.SECRET || 'dumb dumb';
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.SERVER_PORT;

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
});