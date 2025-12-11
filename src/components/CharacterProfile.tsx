import React from 'react';
import { Link } from 'react-router-dom';
import './CharacterProfile.css';

export interface CharacterProfileProps {
    id: string;
    name: string;
    race: string;
    classRole: string;
    status: 'Active' | 'Missing' | 'Deceased';
    description: string;
    imageSrc: string;
}

const CharacterProfile: React.FC<CharacterProfileProps> = ({
    id,
    name,
    race,
    classRole,
    status,
    description,
    imageSrc,
}) => {
    const statusClass = status.toLowerCase();

    const truncatedDescription = description.length > 75 ? description.substring(0, 75) + '...' : description;

    return (
        <Link to={`/characters/${id}`} className="character-card-link">
            <article className={`character-profile ${statusClass}`}>
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
                    </div>
                </div>

                <div className="profile-details">
                    <p>
                        <strong>Race:</strong> {race}
                    </p>
                    <p>
                        <strong>Class:</strong> {classRole}
                    </p>

                </div>

                <div className="profile-description">
                    <h4>Background</h4>
                    <p>{truncatedDescription}</p>
                </div>
            </article>
        </Link>
    );
};

export default CharacterProfile;
