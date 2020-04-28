import express from 'express';
import cors from 'cors';
const app = express();
app.use(express.static('ui/build'));
app.use(express.json());
app.use(cors());


app.get('/ping', (_req, res) => { 
  console.log('someone pinged here');
  res.send('YO MAN');
});
  
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});