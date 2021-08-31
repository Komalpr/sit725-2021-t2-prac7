const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.json());

app.use('/api/contact', require('./routes/contact'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/Home.html');
});

app.listen(3000, () => {
  console.log('Server is running on port', 3000);
});