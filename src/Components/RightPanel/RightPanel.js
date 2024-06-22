// RightPanel.js
import React from 'react';
import HomeContainer from './HomeContent/HomeContainer';
import { AboutContainer } from './AboutContent/AboutContainer';
import { Resume } from './ResumeContent/Resume';
import { Contact } from './ContactContent/Contact';
import './RightPanel.css';
const RightPanel = ({ content, onClose }) => {
    return (
        <div className="dp-right-panel">
            <button className="dp-right-panel__close" onClick={onClose}>Close</button>
            <div className="dp-right-panel__content">
                {getComponentToRender(content)}
            </div>
        </div>
    );
}

function getComponentToRender(content) {
    switch(content) {
        case "Home":
            return <HomeContainer />;
        case  "About":
            return <AboutContainer/>
        case "Resume":
            return <Resume/>
        case "Contact":
        return <Contact/>

        default:
            return <HomeContainer/>;
    }
}

export default RightPanel;
