import React from 'react';
import './CharacterProfile.css';

export interface CharacterProfileProps {
    name: string;
    race: string;
    classRole: string;
    level: number;
    status: 'Active' | 'Missing' | 'Deceased';
    description: string;
    imageSrc: string;
    keyStats: {
        hp: number;
        ac: number;
        passivePerception: number;
    };
}

const CharacterProfile: React.FC<CharacterProfileProps> = ({
    name,
    race,
    classRole,
    level,
    status,
    description,
    imageSrc,
    keyStats,
}) => {
    const statusClass = status.toLowerCase();

    return (
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
                <p>
                    <strong>Level:</strong> {level}
                </p>
            </div>

            <div className="key-stats">
                <div className="stat-box">
                    <span className="stat-value">{keyStats.hp}</span>
                    <span className="stat-label">HP</span>
                </div>
                <div className="stat-box">
                    <span className="stat-value">{keyStats.ac}</span>
                    <span className="stat-label">AC</span>
                </div>
                <div className="stat-box">
                    <span className="stat-value">
                        {keyStats.passivePerception}
                    </span>
                    <span className="stat-label">Passive Perception</span>
                </div>
            </div>

            <div className="profile-description">
                <h4>Background</h4>
                <p>{description}</p>
            </div>
        </article>
    );
};

export default CharacterProfile;
