var mongoose = require('mongoose');

module.exports = mongoose.model('Student', {
    Name: {type: String, required: true},
    College: {type: String, required: true},
    Age: {type: Number, required: true},
    CGPA: {type: Number, required: true}
});