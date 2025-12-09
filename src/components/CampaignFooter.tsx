import React from 'react';
import './CampaignFooter.css';

const CampaignFooter: React.FC = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="campaign-footer">
            <p>&copy; {year} Sins of His Holiness. All rights reserved.</p>
            <p className="attribution">
                Website built for the campaign. Design inspired by the Holy
                Scripture and Canonical Texts. And <em>Blasphemous</em>. And{' '}
                <em>Bloodborne</em>.
            </p>
        </footer>
    );
};

export default CampaignFooter;
