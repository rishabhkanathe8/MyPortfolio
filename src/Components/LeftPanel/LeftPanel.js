// LeftPanel.js
import React from 'react';
import './LeftPanel.css';
import ImageContainer from "../CommonComponent/ImageContainer";

const LeftPanel = ({ onItemClick }) => {
    const menuItems = ['Social Media Icon', 'Home', 'About', 'Resume', 'Contact'];

    return (
        <div className="dp-left-panel">
            <ImageContainer />
            <div className="dp-left-panel__my-name">Rishabh Kanathe</div>
            <div className="dp-left-panel__links">
                {menuItems.map((item, index) => (
                    <div key={index} onClick={() => onItemClick(item)}>
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LeftPanel;
