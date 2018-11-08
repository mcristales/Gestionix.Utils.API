var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {

  app.get('/key/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('key').findOne(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send(item);
      } 
    });
  });

app.post('/key', (req, res) => {
    const key = { apikey: req.body.apikey, title: req.body.description };
    db.collection('key').insert(key, (err, result) => {
      if (err) { 
        res.send({ 'error': 'An error has occurred' }); 
      } else {
        res.send(result.ops[0]);
      }
    });
  });

  app.put('/key/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    const key = { apikey: req.body.apikey, title: req.body.description };
    db.collection('key').update(details, key, (err, result) => {
      if (err) {
          res.send({'error':'An error has occurred'});
      } else {
          res.send(key);
      } 
    });
  });

  app.delete('/key/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('key').remove(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send('Note ' + id + ' deleted!');
      } 
    });
  });

};