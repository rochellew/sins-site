import ContentCard from '../components/ContentCard';
import ContentLayout from '../components/ContentLayout';
import CharacterProfile from '../components/CharacterProfile';
import NonPlayerCard from '../components/NonPlayerCard';
import AntagonistCard from '../components/AntagonistCard';
import { type FC, useEffect } from 'react';
import {
    objectiveCard,
    historyCard,
    ALL_CHARACTERS,
    type CharacterDataWithComponentType,
} from '../data/content.tsx';

const CharacterComponentMap: Record<
    CharacterDataWithComponentType['type'],
    FC<any>
> = {
    PC: CharacterProfile,
    NPC: NonPlayerCard,
    Antagonist: AntagonistCard,
};

const HomePage: FC = () => {
    useEffect(() => {
        document.title = 'Sins of His Holiness';
    });

    // select up to 3 characters for homepage display
    const featuredCharacters = ALL_CHARACTERS.filter(
        (char) =>
            char.status === 'Active' ||
            char.type === 'PC' ||
            char.type === 'Antagonist',
    ).slice(0, 3);
    return (
        <main>
            <h2>Featured Characters</h2>
            <ContentLayout>
                {featuredCharacters.map((char) => {
                    const Component = CharacterComponentMap[char.type];

                    return <Component key={char.id} {...char} />;
                })}
            </ContentLayout>

            <hr
                style={{
                    border: '1px solid var(--color-border-dark)',
                    margin: '3rem 0',
                }}
            />

            <h2>Campaign Log</h2>
            <ContentLayout>
                <ContentCard title="Current Objective: The Prospero Uprising">
                    {objectiveCard}
                </ContentCard>
                <ContentCard title="A Brief History of Last Session">
                    {historyCard}
                </ContentCard>
            </ContentLayout>
        </main>
    );
};

export default HomePage;
