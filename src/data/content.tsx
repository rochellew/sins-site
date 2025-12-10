import ContentCard from '../components/ContentCard';

import { PC_DATA } from './pcData';
import { NPC_DATA } from './npcData';
import { ANTAGONIST_DATA } from './antagonistData';

import { type CharacterProfileProps } from '../components/CharacterProfile';
import { type NonPlayerCardProps } from '../components/NonPlayerCard';
import { type AntagonistCardProps } from '../components/AntagonistCard';

export type CharacterDataWithComponentType =
    | (CharacterProfileProps & { type: 'PC' })
    | (NonPlayerCardProps & { type: 'NPC' })
    | (AntagonistCardProps & { type: 'Antagonist' });

export const ALL_CHARACTERS: CharacterDataWithComponentType[] = [
    ...PC_DATA.map((char) => ({ ...char, type: 'PC' as const })),

    ...NPC_DATA.map((char) => ({
        ...char,
        type: 'NPC' as const,
        race: '',
        classRole: '',
        keyStats: undefined as any, // Placeholder for the PC component fields
    })),

    ...ANTAGONIST_DATA.map((char) => ({
        ...char,
        type: 'Antagonist' as const,
        race: '',
        classRole: '',
        keyStats: undefined as any,
    })),
];

export const loreTabs = [
    {
        title: 'Age of Gold and Blood',
        content: (
            <ContentCard title="Sangribar's Reign">
                <p>
                    Prior to the formation of Terra Sancta, Sangribar was an
                    ordinary man with an extraordinary power bestowed upon him
                    by an unknown entity. His blood rendered into a physick
                    capable of healing any malady and extending his lifespan
                    beyond natural years, Sangribar founded the Church of
                    Poenitentium and garnered enough worshippers to be
                    considered a god in his own right.
                </p>

                <p>
                    The atrocities committed on his orders or in the name of his
                    faith earned Sangribar a Domain of Dread after a betrayal
                    resulting in his death.
                </p>
            </ContentCard>
        ),
    },
];

export const objectiveCard = (
    <div>
        <p>The party has been tasked to do a thing!</p>
        <ul>
            <li>
                <strong>Location:</strong> Prospero
            </li>
            <li>
                <strong>Deadline:</strong> One more day
            </li>
            <li>
                <strong>Reward:</strong> A city!
            </li>
        </ul>
    </div>
);
export const historyCard = (
    <div>
        <p>Party scouts Prospero in preparation for the upcoming raid.</p>
        <p style={{ fontStyle: 'italic', marginTop: '1rem' }}>
            "The Scribe may enact the rite of Recollection on three members
            present at the reading of this contract."
        </p>
        <p>- Ambrose, Scribe of Lucien's Infernal Contract</p>
    </div>
);
