// Base character interface that all character types extend
export interface BaseCharacter {
    id: string;
    name: string;
    status: 'Active' | 'Missing' | 'Defeated' | 'Deceased' | 'Neutral' | 'Hostile' | 'Sealed';
    imageSrc: string;
    description: string;
}

// Player character specific fields
export interface PlayerCharacter extends BaseCharacter {
    race: string;
    classRole: string;
    artistName?: string;
    artistLink?: string;
}

// NPC specific fields
export interface NonPlayerCharacter extends BaseCharacter {
    role: string;
}

// Antagonist specific fields
export interface AntagonistCharacter extends BaseCharacter {
    title: string;
}

// Union type for all character types
export type Character = PlayerCharacter | NonPlayerCharacter | AntagonistCharacter;

// Character type enum
export enum CharacterType {
    PLAYER = 'player',
    NPC = 'npc',
    ANTAGONIST = 'antagonist'
}

// Type guards
export const isPlayerCharacter = (character: Character): character is PlayerCharacter => {
    return 'race' in character && 'classRole' in character;
};

export const isNonPlayerCharacter = (character: Character): character is NonPlayerCharacter => {
    return 'role' in character;
};

export const isAntagonistCharacter = (character: Character): character is AntagonistCharacter => {
    return 'title' in character;
};