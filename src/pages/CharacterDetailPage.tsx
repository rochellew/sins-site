import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PC_DATA } from '../data/pcData';
import './CharacterDetailPage.css';

const CharacterDetailPage = () => {
    const { characterId } = useParams<{ characterId: string }>();

    const character = PC_DATA.find(char => char.id === characterId);

    useEffect(() => {
        if (character) {
            document.title = `Sins - ${character.name}`;
        } else {
            document.title = 'Sins - Character Not Found';
        }
    }, [character]);

    if (!character) {
        return (
            <main>
                <h1>Character Not Found</h1>
                <p>This character does not exist within the world of Terra Sancta.</p>
                <Link to="/characters">Back to Characters</Link>
            </main>
        );
    }

    const statusClass = character.status.toLowerCase();

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
                    <div className="character-meta">
                        <p><strong>Race:</strong> {character.race}</p>
                        <p><strong>Class:</strong> {character.classRole}</p>
                    </div>

                    {character.artistName && (
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
                    )}
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

export default CharacterDetailPage;