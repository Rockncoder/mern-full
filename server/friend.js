import mongoose from 'mongoose';

const friendSchema = mongoose.Schema({
  "id": Number,
  "gender": String,
  "firstName": String,
  "lastName": String,
  "email": String,
  "ipAddress": String,
  "job": String,
  "company": String,
  "birthDate": Date,
  "latitude": String,
  "longitude": String,
});

const Friend = mongoose.model('Friend', friendSchema);

export default Friend;
