const nodemailer=require('nodemailer');
let transporter=nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: 'eshu97612@gmail.com',
        pass: 'rylurfijblehdyll'
    }
});

let mailOptions = {
    from: 'eshu97612@gmail.com',
    to: 'eshu97612@gmail.com',
    subject: 'Testing Nodemailer',
    text: 'hey'

};

transporter.sendMail(mailOptions, (error, info) => {
    if(error){
        console.log('Error Occured' + error)
    }
    else{
        console.log('Email Sent to :' +mailOptions.to, info.response);
    }
})