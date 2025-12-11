import { type CharacterProfileProps } from '../components/CharacterProfile';

export interface PCDataExtended extends CharacterProfileProps {
    artistName?: string;
    artistLink?: string;
}

export const PC_DATA: PCDataExtended[] = [
    {
        id: 'seras',
        name: 'Seras',
        race: 'Aasimar',
        classRole: 'Grave Domain Cleric',
        status: 'Active' as const,
        imageSrc: '/images/seras.png',
        description:
            'Tasked with ridding the domain of its God of Blood, Sangribar, Seras left their convent as the incumbent vessel of the One Without and has recently become its host in a new way.',
        artistName: "pnutbutterdraws",
        artistLink: "https://www.instagram.com/pnutbutterdraws?igsh=dHUzcmg3Y2lta2Fz"
    },
    {
        id: 'lucien',
        name: 'Lucien',
        race: 'Dhampir',
        classRole: 'Shadow Magic Sorcerer / Warlock',
        status: 'Active' as const,
        imageSrc: '/images/lucien.png',
        description:
            'A nobleman cursed with dhampirism by the ill deeds of his father, Lucien has been banished to Terra Sancta; during his time in the Domain, though, he has made valuable connections with the party and revealed much of his nature to them.',
    },
    {
        id: 'mighty',
        name: 'Mighty',
        race: 'Plasmoid',
        classRole: 'Soulknife Rogue',
        status: 'Active' as const,
        imageSrc: '/images/mighty.png',
        description:
            'A homunculus created through unknown rite by the alchemist Dominic Wormwood, Mighty has formed a new family with the party while saving his homonculi siblings from danger, oftentimes self-imposed.',
    },
];
