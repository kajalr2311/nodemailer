const nodemailer = require("nodemailer");

exports.sendMail = (req,res) =>{

const transport = nodemailer.createTransport({
    service:"gmail",
    host:"smtp.gmail.com",
    port:465,
    auth:{
        user:"kr231107@gmail.com",
        pass:"kitrhlpdooxgtkgz",
    },
  });
  const mailOptions = {
    
      from: '"Udbopal pvt.ltd 👻"<Udbhopal@gmail.com>', // sender address
      to: req.body.email, // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>welcome</b>", // html body
    };
  
    transport.sendMail(mailOptions,(err,info) =>{
        if (err) return res.send(err);
        console.log(info);
        return res.send(
            "<h1 style='text-align:center;color: tomato; margin-top:10%'><span style='font-size:60px;'>✔️</span> <br />Email Sent! Check your inbox , <br/>check spam in case not found in inbox.</h1><a href='/'>back to home</a>"
        );
    });
    
};