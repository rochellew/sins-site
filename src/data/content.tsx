import ContentCard from '../components/ContentCard';
import { type CharacterProfileProps } from '../components/CharacterProfile';
import { type NonPlayerCardProps } from '../components/NonPlayerCard';
import { type AntagonistCardProps } from '../components/AntagonistCard';

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

// Move character data here
export const characterData = {
    seras: {
        name: 'Seras',
        race: 'Aasimar',
        classRole: 'Grave Domain Cleric',
        level: 11,
        status: 'Active' as const,
        imageSrc:
            'https://img.freepik.com/free-vector/kneeling-angel-with-golden-hair-wings_1308-182984.jpg',
        description:
            'Tasked with ridding the domain of its God of Blood, Sangribar, Seras left their convent as the incumbent vessel of the One Without and has recently become its host in a new way.',
        keyStats: { hp: 90, ac: 11, passivePerception: 18 },
    } as CharacterProfileProps,
};

export const npcData = {
    cyrus: {
        name: 'Cyrus',
        role: 'Cartographer of the Grinning Troupe',
        status: 'Active' as const,
        imageSrc:
            'https://www.plushinarush.com/cdn/shop/products/14-purple-majesty-colorama-xl-bear-14106-6-583446920.jpg?v=1744931095',
        description:
            'The once rageful beast has calmed after the unknown fate of his daughter, and has devoted his intellect and aptitude for cartogrphay and craftsmanship to the cause of the Grinning troupe.\nHe has been a stalwart ally of the party, and has formed a special friendship with the cleric Seras.',
    } as NonPlayerCardProps,
};

export const antagonistData = {
    gil: {
        name: 'Gil',
        title: 'Bloodlicker Host',
        status: 'Defeated' as const,
        imageSrc:
            'https://cdna.artstation.com/p/assets/images/images/030/634/838/large/xabi-gazte-whispering-mouther.jpg?1601210637',
        description:
            "A Bloodlicker parasite inhabiting the body of Gil, Tialah's former assistant (and purported lover of Simon Royce), Gil hounded the party at the outset of their adventure, his disturbing thirst for blood a grim indicator of what their adventures would bring...",
    } as AntagonistCardProps,
};

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
