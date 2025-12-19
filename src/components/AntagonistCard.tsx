import React from 'react';
import {Link} from 'react-router-dom';
import './AntagonistCard.css';
import { FaScroll } from 'react-icons/fa';

export interface AntagonistCardProps {
    id: string;
    name: string;
    title: string;
    status: 'Active' | 'Defeated' | 'Sealed' | 'Missing';
    description: string;
    imageSrc: string;
    loreLink?: string; // Optional URL to a lore page/tab
}

const AntagonistCard: React.FC<AntagonistCardProps> = ({
    id,
    name,
    title,
    status,
    description,
    imageSrc,
    loreLink,
}) => {
    const statusClass = status.toLowerCase();
    const isDefeated = status === 'Defeated';

    const cardClassName = `antagonist-card ${isDefeated ? 'defeated-look' : ''}`;

    return (
        <Link to={`/antagonists/${id}`}>
            <article className={cardClassName}>
                <div className="profile-header">
                    <img
                        src={imageSrc}
                        alt={`Portrait of ${name}`}
                        className="character-portrait"
                    />
                    <div className="header-info">
                        <h2>{name}</h2>
                        <p
                            className={`status-tag status-antagonist status-${statusClass}`}
                        >
                            {status}
                        </p>
                        <p className="antagonist-title">{title}</p>
                    </div>
                    {loreLink && (
                        <a href={loreLink} className="lore-link">
                            <FaScroll /> View Lore Index
                        </a>
                    )}
                </div>

                <div className="profile-description">
                    <p>{description}</p>
                </div>
            </article>
        </Link>
    );
};

export default AntagonistCard;