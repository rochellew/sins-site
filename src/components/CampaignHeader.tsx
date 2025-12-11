import React from 'react';
import { Link } from 'react-router-dom';
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
                <Link to="/home">Home</Link>
                <Link to="/world">The World</Link>
                <Link to="/characters">Characters</Link>
                { /* <Link to="/lore">Lore</Link> */}
            </nav>
        </header>
    );
};

export default CampaignHeader;
