// mycontacts-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const mycontacts = new Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    town: { type: String, required: true },
    country: { type: String, required: true },
    age: { type: Number, required: true },
    phone_number: { type: String, required: true },
    job: { type: String, required: true },
    title: { type: String, required: true },
    gender: { type: String, required: true, enum: ['male', 'female'] },
    email: { type: String, required: true }
  }, {
    timestamps: true
  });

  return mongooseClient.model('mycontacts', mycontacts);
};
