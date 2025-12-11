import SearchableTabs from '../components/SearchableTabs';
import CharacterProfile, { type CharacterProfileProps } from '../components/CharacterProfile';
import NonPlayerCard, { type NonPlayerCardProps } from '../components/NonPlayerCard';
import AntagonistCard, { type AntagonistCardProps } from '../components/AntagonistCard';
import { PC_DATA } from '../data/pcData';
import { NPC_DATA } from '../data/npcData';
import { ANTAGONIST_DATA } from '../data/antagonistData';

import { useEffect } from 'react';

const CharactersPage = () => {
    useEffect(() => {
        document.title = 'Sins - Characters';
    });

    const tabs = [
        {
            label: 'Player Characters',
            items: PC_DATA,
            renderItem: (char: CharacterProfileProps) => <CharacterProfile key={char.id} {...char} />,
            searchFilter: (char: CharacterProfileProps, term: string) => char.name.toLowerCase().includes(term),
        },
        {
            label: 'NPCs',
            items: NPC_DATA,
            renderItem: (char: NonPlayerCardProps) => <NonPlayerCard key={char.id} {...char} />,
            searchFilter: (char: NonPlayerCardProps, term: string) => char.name.toLowerCase().includes(term),
        },
        {
            label: 'Antagonists',
            items: ANTAGONIST_DATA,
            renderItem: (char: AntagonistCardProps) => <AntagonistCard key={char.id} {...char} />,
            searchFilter: (char: AntagonistCardProps, term: string) => char.name.toLowerCase().includes(term),
        },
    ];

    return (
        <main>
            <h1>Characters</h1>
            <SearchableTabs tabs={tabs} />
        </main>
    );
};

export default CharactersPage;