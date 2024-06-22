// PortFolio.js
import React, { useState } from 'react';
import LeftPanel from './LeftPanel/LeftPanel';
import RightPanel from './RightPanel/RightPanel';
import './PortFolio.css';

const PortFolio = () => {
    const [rightPanelVisible, setRightPanelVisible] = useState(false);
    const [selectedContent, setSelectedContent] = useState(null);

    const handleItemClick = (content) => {
        setSelectedContent(content);
        setRightPanelVisible(true);
    };

    const handleCloseRightPanel = () => {
        setRightPanelVisible(false);
    };

    return (
        <div className='dp-port-folio'>
            <div className='dp-port-folio__panel'>
                <div className={`dp-port-folio__left-panel ${rightPanelVisible ? 'hidden' : ''}`}>
                    <LeftPanel onItemClick={handleItemClick} />
                </div>
                <div className={`dp-port-folio__right-panel ${rightPanelVisible ? 'visible' : ''}`}>
                    <RightPanel content={selectedContent} onClose={handleCloseRightPanel} />
                </div>
            </div>
        </div>
    );
}

export default PortFolio;
