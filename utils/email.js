'use server'
import nodemailer from 'nodemailer';

export const config = {
    api: {
      bodyParser: {
        sizeLimit: '20mb', // Adjust the limit as needed
      },
    },
  };

const sendEmail = async (to, subject, text, attachment) => {
    const password = process.env.Google_Pass;
  // Replace these values with your email server details
  const transporter = nodemailer.createTransport({
    service: 'gmail', // e.g., 'gmail'
    auth: {
      user: 'jetsetpassport@gmail.com',
      pass: password,
    },
  });

  const mailOptions = {
    from: 'jetsetpassport@gmail.com',
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

export default sendEmail;
