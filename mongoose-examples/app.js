const mongoose = require('mongoose');
const db = mongoose.connect('mongodb://localhost/examples', {useMongoClient:true});

mongoose.Promise = Promise

const Song = mongoose.model('Song', {
  name: String,
  artist: String,
  durationSeconds: Number
});

Song.create({
  name: 'Running Home To You',
  artist: 'Grant Gustin',
  durationSeconds: 400
});

Song.find().then((results) =>{
  console.log(results)
})
