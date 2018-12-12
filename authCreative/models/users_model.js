var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var UserSchema = new Schema({
    username: { type: String, unique: true },
    email: String,
    pictures: [String],
    hashed_password: String
});
mongoose.model('User', UserSchema);