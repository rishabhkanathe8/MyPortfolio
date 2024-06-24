import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import emailjs from 'emailjs-com';

import './Contact.css';

export const Contact = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleSubjectChange = (e) => setSubject(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email || !subject || !message) {
      alert('Please fill in all fields.');
      return;
    }

    const templateParams = {
      from_email: email,
      subject: subject,
      message: message,
    };

    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      templateParams,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY  
    )
    .then((response) => {
      alert('Email sent successfully!', response.status, response.text);
      setEmail('');
      setSubject('');
      setMessage('');
    })
    .catch((error) => { 
      console.error('Error sending email:', error);
      alert('Failed to send email. Please try again later.');
    });
  };

  return (
    <div className='dp-contact-form__wrapper'>
      <div className='dp-contact-form_submit'> 
        <h4>I am always open to discussing new projects, opportunities in the tech world, partnerships, and more so mentorship.</h4>
        <TextField
          type='email'
          id="email"
          label="Email Address"
          variant="outlined"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <TextField
          id="subject"
          label="Subject"
          variant="outlined"
          value={subject}
          onChange={handleSubjectChange}
          required
        />
        <TextField
          id="message"
          label="Message"
          multiline
          rows={4}
          variant="outlined"
          value={message}
          onChange={handleMessageChange}
          required
        />
        <Button variant="outlined" onClick={handleSubmit}>Send</Button>
      </div>
    </div>
  );
};
