const { MongoClient } = require('mongodb');

const client = new MongoClient('mongodb+srv://Sit-725-2021:8QQ1Ks9j6d0UEmwK@sit-725-prac4.t2u3p.mongodb.net/business-cards?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect((err) => {
  if (err) throw err;
  console.log('Database connected');
});

const getAll = (res) => {
  const contactCollection = client.db('business-cards').collection('contact');

  contactCollection.find().toArray((err, result) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    res.json(result);
  });
};

const insert = (data, res) => {
  const contactCollection = client.db('business-cards').collection('contact');

  contactCollection.insertOne(data, (err) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    res.json({ message: 'Contact inserted' });
  });
};

module.exports = {
  getAll,
  insert,
};
