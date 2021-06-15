const router = require('express').Router();
const nodemailer = require('nodemailer');

// gets all friend requests
router.post('/send-message', async (req, res) => {
    let {fName, lName, email, subjectLine, subject} = req.body;
    let name = fName + " " + lName;

    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        service: 'gmail',
        secure: true,
        auth: {
            user: 'cushotgun@gmail.com',
            pass: 'CuShotgun2021'
        },
        debug: false,
        logger: true
    });

    let mail = {
        from: 'cushotgun@gmail.com',
        to: 'cutrapandskeet@gmail.com',
        subject: subjectLine,
        html:'<h>From: ' + email + '</h>' + '<br>' + '<p>Name: ' + name + '</p>' + '<p>Subject: ' + subject + '</p>'
    }

    transporter.sendMail(mail, function(err, info) {
        if (err) return res.cookie('msg','Uh oh! Something went wrong! Please try again.', {maxAge: 1000}).redirect('/contact');
        else return res.cookie('msg','Thanks for contacting us! We\'ll get back to you as soon as possible.', {maxAge: 1000}).redirect('/contact');
    });
});

module.exports = router;
