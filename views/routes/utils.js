const router = require('express').Router();
const nodemailer = require('nodemailer'); 
const config = require("../../config")
// gets all friend requests
router.post('/send-message', async (req, res) => {
    let {fName, lName, email, subjectLine, subject} = req.body;
    let name = fName + " " + lName;

    let transporter = nodemailer.createTransport({
        service: 'hotmail',
        auth: config.contact.auth,
        debug: false,
        logger: true
    });

    let mail = {
        from: config.contact.from,
        to: config.contact.to, 
        cc: email,
        subject: subjectLine,
        html:'<h><b>From: </b>' + email + '</h>' + '<br>' + '<p><b>Name: </b>' + name + '</p>' + '<p><b>Subject: </b>' + subject + '\n</p>'
    }

    transporter.sendMail(mail, function(err, info) {
        if (err) return res.cookie('msg','Something went wrong, please try again. If this persists, email us directly.', {maxAge: 1000}).redirect('/contact');
        else return res.cookie('msg','Thanks for contacting us! We\'ll get back to you as soon as possible.', {maxAge: 1000}).redirect('/contact');
    });
});

module.exports = router;
