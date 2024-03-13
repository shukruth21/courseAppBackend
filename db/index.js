const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://shukruthj:9iDIs8WHCsIUwF9z@cluster0.hskdsc7.mongodb.net/');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username:String,
    password:String

});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username:String,
    password:String
    
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title:String,
    description:String,
    imageLink:String,
    price:Number
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}