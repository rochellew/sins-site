import React from 'react';
import './NonPlayerCard.css';

export interface NonPlayerCardProps {
    name: string;
    role: string;
    status: 'Active' | 'Missing' | 'Deceased' | 'Neutral' | 'Hostile';
    description: string;
    imageSrc: string; // URL for the portrait
}

const NonPlayerCard: React.FC<NonPlayerCardProps> = ({
    name,
    role,
    status,
    description,
    imageSrc,
}) => {
    const statusClass = status.toLowerCase();

    return (
        <article className="non-player-card">
            <div className="profile-header">
                <img
                    src={imageSrc}
                    alt={`Portrait of ${name}`}
                    className="character-portrait"
                />
                <div className="header-info">
                    <h2>{name}</h2>
                    <p className={`status-tag status-${statusClass}`}>
                        {status}
                    </p>
                    <p className="npc-role">{role}</p>
                </div>
            </div>

            <div className="profile-description">
                <p>{description}</p>
            </div>
        </article>
    );
};

export default NonPlayerCard;
