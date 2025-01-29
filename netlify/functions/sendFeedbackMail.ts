const nodemailer = require("nodemailer");
import FEEDBACK_MAIL_TEMPLATE from "../../emails/feedbackMail";

const handler = async (event, context) => {
  // Parse the body of the request
  const data = JSON.parse(event.body);
  // Extract the fields from the data
  const { feedback, review, email, pageURL, topicName } = data;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "documentation@boomi.com",
      pass: process?.env?.Feedback_Email_Password,
    },
  });
  const mailOptions = {
    from: "Boomi Help <docs@boomi.com>",
    to: email,
    subject: `Documentation Feedback: ${topicName}`,
    html: FEEDBACK_MAIL_TEMPLATE(feedback, review, email, pageURL, topicName),
  };
  try {
    const info = await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ result: "success" }),
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
module.exports = { handler };
