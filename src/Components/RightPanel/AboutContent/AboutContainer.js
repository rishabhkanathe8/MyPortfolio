import React from 'react';
import './AboutContainer.css';
import SkillsProgress from './SkillProgressBar';
import TreeView from './TreeView';

export const content = "Hello there! I'm thrilled to welcome you to my portfolio. I am a passionate and versatile full-stack developer with a keen interest in exploring the latest cutting-edge technologies.My journey in the world of web development has been nothing short of exhilarating, and I constantly strive to enhance my skills and embrace emerging trends in the industry.  full-stack developer with a keen interest in exploring the latest cutting-edge technologies.My journey in the world of web development has been nothing short of exhilarating, and I constantly strive to enhance my skills and embrace emerging trends in the industry.";

export const AboutContainer = () => {
    
    return (
        <div className='dp-about-container'>
           
            <div className='dp-about-container__inner'>
                <div className='dp-about-container__left'>
                <h2 style={{ color: 'black' }}>About Me</h2>
                    <div className='dp-about-container__photo'>
                       {content}
                    </div>
                    <div className='dp-about-container__tree'><TreeView/></div>
                </div>
                <div className='dp-about-container__right'>
                    <SkillsProgress/>
                </div>
            </div>
            
        </div>
    );
};
