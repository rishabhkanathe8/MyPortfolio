import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import './Contact.css';

export const Contact = () => {
  return (
    <div className='dp-contact-form__wrapper'>
        <div className='dp-contact-form_submit'> 
       <h4> I am always open to discussing new projects, opportunities in tech world,
       partnerships and more so mentorship. </h4>
            <TextField type='email' id="outlined-basic" label="Email Address" variant="outlined" />
            <TextField id="outlined-basic" label="Subject" variant="outlined" />
            <TextField id="filled-multiline-static"label="Message"multilinerows={4}variant="outlined"/>
            <Button variant="outlined" > Send</Button>
         </div>
    </div>
  );
}

