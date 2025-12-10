import { type AntagonistCardProps } from '../components/AntagonistCard';

export const ANTAGONIST_DATA: AntagonistCardProps[] = [
    {
        id: 'gil',
        name: 'Gil',
        title: 'Bloodlicker Host',
        status: 'Defeated' as const,
        imageSrc:
            'https://cdna.artstation.com/p/assets/images/images/030/634/838/large/xabi-gazte-whispering-mouther.jpg?1601210637',
        description:
            "A Bloodlicker parasite inhabiting the body of Gil, Tialah's former assistant (and purported lover of Simon Royce), Gil hounded the party at the outset of their adventure, his disturbing thirst for blood a grim indicator of what their adventures would bring...",
    },
];
