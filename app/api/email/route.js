import nodemailer from 'nodemailer';
// index.js or server.js
require('dotenv').config();


const sendEmail = async (to, subject, text, attachment) => {
    const password = process.env.Google_Pass;
    // Replace these values with your email server details
  const transporter = nodemailer.createTransport({
    service: 'gmail', // e.g., 'gmail'
    auth: {
      user: 'jetsetpassports@gmail.com',
      pass: password,
    },
  });

  const mailOptions = {
    from: 'jetsetpassports@gmail.com',
    to,
    subject,
    text,
    attachments: [
      {
        filename: 'passport_application.pdf',
        content: attachment,
        encoding: 'base64',
      },
    ],
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email', error);
  }
};

export async function POST(Request){

  if (Request) {
    try {
      const { to, subject, text, attachment } = await Request.json();

      // Call your sendEmail function
      await sendEmail(to, subject, text, attachment);

      // Send response
      return Response.json({ success: true });
    } catch (error) {
      console.error('Error parsing or sending email', error);
      return Response.json({ success: false, error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
};
