var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE,
  auth: {
    user: process.env.SENDER_EMAIL,
    pass: process.env.SENDER_EMAIL_PASSWORD,
  },
});

var mailOptions = {
  from: process.env.SENDER_EMAIL,
  to: `${process.env.RECIEVER_1}`,
  subject: process.env.EMAIL_SUBJECT,
  text: "",
};

const emailSender = async ({ name, email, contact_reason, message }) => {
  mailOptions.text = `Name: ${name}\nEmail: ${email}\nReason for contact: ${contact_reason}\nMessage: ${message}`;
  const result = await transporter.sendMail(mailOptions);
  if (result.accepted.length == 1) {
    return true;
  } else {
    return false;
  }
};

module.exports = emailSender;
