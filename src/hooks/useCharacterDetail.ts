import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { type Character, CharacterType } from '../types/character';
import { PC_DATA } from '../data/pcData';
import { NPC_DATA } from '../data/npcData';
import { ANTAGONIST_DATA } from '../data/antagonistData';

interface UseCharacterDetailProps {
    characterType: CharacterType;
}

interface UseCharacterDetailReturn {
    character: Character | undefined;
    isLoading: boolean;
    error: string | null;
}

export const useCharacterDetail = ({ characterType }: UseCharacterDetailProps): UseCharacterDetailReturn => {
    const { characterId, npcId, antagonistId } = useParams<{
        characterId?: string;
        npcId?: string;
        antagonistId?: string;
    }>();

    // Determine which ID to use based on character type
    const id = characterType === CharacterType.PLAYER ? characterId
        : characterType === CharacterType.NPC ? npcId
            : antagonistId;

    // Get the appropriate data source
    const getDataSource = (): Character[] => {
        switch (characterType) {
            case CharacterType.PLAYER:
                return PC_DATA;
            case CharacterType.NPC:
                return NPC_DATA;
            case CharacterType.ANTAGONIST:
                return ANTAGONIST_DATA;
            default:
                return [];
        }
    };

    const dataSource = getDataSource();
    const character = dataSource.find(char => char.id === id);

    // Set document title
    useEffect(() => {
        if (character) {
            document.title = `Sins - ${character.name}`;
        } else {
            document.title = 'Sins - Character Not Found';
        }
    }, [character]);

    return {
        character,
        isLoading: false,
        error: character ? null : 'Character not found'
    };
};