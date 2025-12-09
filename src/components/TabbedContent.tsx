import React, { useState, type ReactNode } from 'react';
import './TabbedContent.css';

interface TabItem {
    title: string;
    content: ReactNode;
}

interface TabbedContentProps {
    tabs: TabItem[];
}

const TabbedContent: React.FC<TabbedContentProps> = ({ tabs }) => {
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const activeTabContent = tabs[activeTabIndex]?.content;
    return (
        <div className="tabbed-content">
            <div className="tab-navigation">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`tab-button ${index === activeTabIndex ? 'active' : ''}`}
                        onClick={() => setActiveTabIndex(index)}
                        aria-selected={index === activeTabIndex}
                    >
                        {tab.title}
                    </button>
                ))}
            </div>
            <div className="tab-panel">
                {/* The content container */}
                {activeTabContent}
            </div>
        </div>
    );
};

export default TabbedContent;
