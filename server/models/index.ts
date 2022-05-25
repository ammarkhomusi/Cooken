import mongoose from 'mongoose';
const dotenv = require('dotenv');
dotenv.config();

const URL: string = `${process.env.DB_URL}`;

mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}
).then(() => {console.log('connect to the db')});

export default mongoose;