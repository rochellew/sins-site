import { type CharacterProfileProps } from '../components/CharacterProfile';

export const PC_DATA: CharacterProfileProps[] = [
    {
        id: 'seras',
        name: 'Seras',
        race: 'Aasimar',
        classRole: 'Grave Domain Cleric',
        level: 11,
        status: 'Active' as const,
        imageSrc: '/images/seras.png',
        description:
            'Tasked with ridding the domain of its God of Blood, Sangribar, Seras left their convent as the incumbent vessel of the One Without and has recently become its host in a new way.',
        keyStats: { hp: 90, ac: 11, passivePerception: 18 },
    },
];
