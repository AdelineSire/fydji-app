import transporter from "./transporter.js";
const GMAIL_USERNAME = process.env.GMAIL_USERNAME;

const sendSubscriptionEmail = (email) => {
  const mailOptions = {
    from: GMAIL_USERNAME,
    to: email,
    subject: "Fydji - Notification d'inscription",
    html: "<h1>Bonjour,<h1><p>Merci pour votre inscription sur Fydji !</><p>Votre email a bien été enregistré</>",
  };
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log("err in transporter.sendMail: ", err);
    } else {
      console.log("info: ", info);
    }
  });
};

export default sendSubscriptionEmail;
