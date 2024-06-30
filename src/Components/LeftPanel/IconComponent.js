import React from 'react';
import { IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';


const SocialMediaIcons = () => {
  return (
    <div >
      <IconButton color="primary" aria-label="Facebook" href="https://facebook.com" target="_blank">
        <FacebookIcon />
      </IconButton>
      <IconButton color="primary" aria-label="Instagram" href="https://www.instagram.com/rishabh_rk_kanathe/" target="_blank">
        <InstagramIcon />
      </IconButton>
      <IconButton color="primary" aria-label="LinkedIn" href=" https://www.linkedin.com/in/rishabh-kanathe-70565a209" target="_blank">
        <LinkedInIcon />
      </IconButton>
      <IconButton color="primary" aria-label="GitHub" href="https://github.com/rishabhkanathe8" target="_blank">
        <GitHubIcon />
      </IconButton>
    </div>
  );
};

export default SocialMediaIcons;
