/* eslint-disable @typescript-eslint/no-var-requires */
import express from 'express';
import cors from 'cors';
const app = express();
app.use(express.static('ui/build'));
app.use(express.json());
app.use(cors());
// eslint-disable-next-line no-undef
require('dotenv').config();
// eslint-disable-next-line no-undef
const CurrentsAPI = require('currentsapi');
// eslint-disable-next-line no-undef
const currentsapi = new CurrentsAPI(`${process.env.CURRENTS_API_KEY}`);

app.get('/ping', (_req, res) => { 
  currentsapi.search({
    keywords: 'health',
  }).then((response: unknown) => {
      console.log(response);
      res.send(response);
  });
});

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});