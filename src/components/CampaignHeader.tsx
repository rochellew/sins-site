import React from 'react';
import './CampaignHeader.css';

interface CampaignHeaderProps {
    campaignTitle: string;
    subtitle: string;
}

const CampaignHeader: React.FC<CampaignHeaderProps> = ({
    campaignTitle,
    subtitle,
}) => {
    return (
        <header className="campaign-header">
            <h1 className="campaign-title">{campaignTitle}</h1>
            <p className="campaign-subtitle">{subtitle}</p>
            <nav className="header-nav">
                <a href="/home">Home</a>
                <a href="/world">The World</a>
                <a href="/characters">Characters</a>
                <a href="/lore">Lore</a>
            </nav>
        </header>
    );
};

export default CampaignHeader;
