import React from 'react';
import { Link } from 'react-router-dom';
import { useCharacterDetail } from '../../hooks/useCharacterDetail';
import { CharacterType, isPlayerCharacter, isNonPlayerCharacter, isAntagonistCharacter } from '../../types/character';
import './CharacterDetail.css';

interface CharacterDetailProps {
    characterType: CharacterType;
}

const CharacterDetail: React.FC<CharacterDetailProps> = ({ characterType }) => {
    const { character, error } = useCharacterDetail({ characterType });

    if (error || !character) {
        const characterTypeLabel = characterType === CharacterType.PLAYER ? 'Character'
            : characterType === CharacterType.NPC ? 'NPC'
                : 'Antagonist';

        return (
            <main>
                <h1>{characterTypeLabel} Not Found</h1>
                <p>This {characterTypeLabel.toLowerCase()} does not exist within the world of Terra Sancta.</p>
                <Link to="/characters">Back to Characters</Link>
            </main>
        );
    }

    const statusClass = character.status.toLowerCase();

    const renderCharacterMeta = () => {
        if (isPlayerCharacter(character)) {
            return (
                <div className="character-meta">
                    <p><strong>Race:</strong> {character.race}</p>
                    <p><strong>Class:</strong> {character.classRole}</p>
                </div>
            );
        }

        if (isNonPlayerCharacter(character)) {
            return (
                <div className="character-meta">
                    <p><strong>Role:</strong> {character.role}</p>
                </div>
            );
        }

        if (isAntagonistCharacter(character)) {
            return (
                <div className="character-meta">
                    <p><strong>Title:</strong> {character.title}</p>
                </div>
            );
        }

        return null;
    };

    const renderArtistAttribution = () => {
        if (isPlayerCharacter(character) && character.artistName) {
            return (
                <div className="artist-attribution-detail">
                    <p>
                        <em>Artwork by:{' '}
                            {character.artistLink ? (
                                <a
                                    href={character.artistLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {character.artistName}
                                </a>
                            ) : (
                                character.artistName
                            )}
                        </em>
                    </p>
                </div>
            );
        }
        return null;
    };

    return (
        <main className="character-detail">
            <Link to="/characters" className="back-link">Back to Characters</Link>

            <div className="detail-header">
                <img
                    src={character.imageSrc}
                    alt={`Portrait of ${character.name}`}
                    className="full-portrait"
                />
                <div className="detail-info">
                    <h1>{character.name}</h1>
                    <p className={`status-tag status-${statusClass}`}>{character.status}</p>

                    {renderCharacterMeta()}
                    {renderArtistAttribution()}
                </div>
            </div>

            <div className="detail-content">
                <section>
                    <h2>Background</h2>
                    <p>{character.description}</p>
                </section>
            </div>
        </main>
    );
};

export default CharacterDetail;