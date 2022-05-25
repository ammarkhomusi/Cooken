import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './router';

dotenv.config();
const app = express();

const PORT = process.env.SERVER_PORT;

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
});