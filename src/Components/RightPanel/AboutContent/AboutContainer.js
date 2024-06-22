import React from 'react';
import './AboutContainer.css';

export const content = "I'm an experienced Certified Software Professional proficient in core and advanced Java, C#, Ms.Net, React, MySQL, Oracle, and Spring Boot. With a proven track record in communication and surpassing project goals, I've orchestrated successful projects like Parking Management System, Tour Easy, and Health Junction, leveraging Spring Boot, microservices, and Java frameworks. My focus is on enhancing efficiency and delivering elevated customer experiences. I'm ready to bring impactful solutions to your organization's success.";

export const AboutContainer = () => {
    return (
        <div className='dp-about-container'>
           
            <div className='dp-about-container__inner'>
                <div className='dp-about-container__photo'></div>
                <div className='dp-about-container__content'>{content}</div>
            </div>
            
        </div>
    );
};
