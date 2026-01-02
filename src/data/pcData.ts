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
        artistName: "theshybard",
        artistLink: "https://www.instagram.com/theshybard/"
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
    {
        id: 'umbra',
        name: 'Umbra',
        race: 'Aarakocra',
        classRole: 'Twilight Domain Cleric',
        status: 'Active' as const,
        imageSrc: '/images/umbra.png',
        description:
            'A well-read cleric from a sisterhood worhipping Selune, the Goddess of the Moon. Umbra has found herself in Terra Sancta and has had to use her intellect to adjust to a world quite different from her own.',
        artistName: "theshybard",
        artistLink: "https://www.instagram.com/theshybard/"
    },
    {
        id: 'gornak',
        name: 'Gornak',
        race: 'Goliath',
        classRole: 'Drunken Master Monk',
        status: 'Active' as const,
        imageSrc: '/images/gornak.png',
        description:
            'Being a brewmaster and merchant by trade, Gornak has friends wherever he goes. A latecomer to the party, he has heard of their exploits and, eager to prove himself, has done so with flying colors thus far.',
        artistName: "theshybard",
        artistLink: "https://www.instagram.com/theshybard/"
    },
];
