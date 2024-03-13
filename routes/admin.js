const express = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = express.Router();

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username=req.body.username;
    const password=req.body.password;
    
    Admin.create({
        username:username,
        password:password

    })
    res.json({
        msg:"admin created succesfully"
    })

});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    const title=req.body.title;
    const description=req.body.description;
    const price=req.body.price;
    const imageLink=req.body.imageLink;

    Course.create({
        title,
        description,
        price,
        imageLink
    })
    res.json({
        msg:"course created succesfully",courseId:newCourse._id
    })
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    const response=Course.find({});
    res.json({
        courses:response
    })
});

module.exports = router;