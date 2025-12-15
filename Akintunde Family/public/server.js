const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer'); // Optional for email
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Handle contact form submission
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  // Log or store the message
  console.log('New message received:', { name, email, message });

  // Optional: send email using nodemailer
  // const transporter = nodemailer.createTransport({ /* SMTP config */ });
  // transporter.sendMail({ from, to, subject, text });

  res.status(200).json({ success: true, message: 'Message received. Thank you!' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
