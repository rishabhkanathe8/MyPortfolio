// LeftPanel.js
import React from 'react';
import './LeftPanel.css';
import ImageContainer from "../CommonComponent/ImageContainer";
import SocialMediaIcons from './IconComponent';
import HomeIcon from '@mui/icons-material/Home';
import DescriptionIcon from '@mui/icons-material/Description'; // for resume
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import { IconButton } from '@mui/material';

const LeftPanel = ({ onItemClick }) => {
    // const menuItems = [ 'Home', 'About', 'Resume', 'Contact'];
    const handleResumeDownload = () => {
        const resumeUrl = 'https://github.com/rishabhkanathe8/MyPortfolio/raw/main/RISHABH_KANATHE_RESUME%20(3).pdf'; // Raw URL to your resume file
        const link = document.createElement('a');
        link.href = resumeUrl;
        link.setAttribute('download', 'Rishabh_Kanathe_Resume.pdf'); // Adjust filename as needed
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    
    
    return (
        <div className="dp-left-panel">
            <ImageContainer />
            <div className="dp-left-panel__my-name">Rishabh Kanathe</div>
            <SocialMediaIcons></SocialMediaIcons>
            <div className="dp-left-panel__links">
                <IconButton onClick={()=>onItemClick('Home')}  size='small' color="primary" aria-label="Home" href="#home"><HomeIcon /> <span className="icon-button-text">Home</span></IconButton> 
                <IconButton onClick={()=>onItemClick('About')} size='small'  color="primary" aria-label="info" href="#info"><PersonOutlinedIcon /><span className="icon-button-text">About</span></IconButton>
                <IconButton  onClick={()=>onItemClick('Resume')} size='small'  color="primary" aria-label="description" href="#description"><DescriptionIcon /><span className="icon-button-text">Resume</span></IconButton>
                <IconButton onClick={()=>onItemClick('Contact')} size='small'  color="primary" aria-label="contact" href="#contact"><MarkEmailReadOutlinedIcon /><span className="icon-button-text">Contact</span></IconButton>
                <IconButton onClick={handleResumeDownload} size='small'  color="primary" aria-label="download" href="#download"> <DownloadForOfflineIcon/><span className="icon-button-text">Download Resume</span></IconButton>
                
            </div>
        </div>
    );
}

export default LeftPanel;
