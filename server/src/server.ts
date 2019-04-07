import { default as express } from 'express';
import { default as compression } from 'compression';
import { connect } from 'mongoose';
import * as dotenv from 'dotenv';
import { default as cors } from 'cors';
import { json } from 'body-parser';
import { mongoConfig } from './Utils';
import {
  postLoginWithFacebook,
  postNewEvent,
  putEditEvent,
  deleteEvent
} from './Controllers';

dotenv.config();
const PORT: string | number = process.env.PORT || 4000;

const app = express();
app.use(compression());
app.use(json());
app.use(cors());

// app.put('/edit/:id', putEditEvent);

// app.delete('/delete/:id', deleteEvent);

app.post('/login-with-facebook', postLoginWithFacebook);
// app.post('/newEvent/:eventId/:facebookId', postNewEvent);

app.listen(PORT, () => {
  connect(
    process.env.MONGO,
    mongoConfig
  )
    .then(() => console.log('Mongo connected'))
    .catch(err => Promise.reject('Mongo is NOT connected'));
  console.log(`The server is running on Port ${PORT}`);
});
