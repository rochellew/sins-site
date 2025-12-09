import React from 'react';
import ContentCard from '../components/ContentCard';
import ContentLayout from '../components/ContentLayout';
import CharacterProfile from '../components/CharacterProfile';
import NonPlayerCard from '../components/NonPlayerCard';
import AntagonistCard from '../components/AntagonistCard';
import TabbedContent from '../components/TabbedContent';
import {
    loreTabs,
    objectiveCard,
    historyCard,
    characterData,
    npcData,
    antagonistData,
} from '../data/content.tsx'; // We'll create this file next
import CampaignFooter from '../components/CampaignFooter.tsx';

const HomePage: React.FC = () => {
    return (
        <main>
            <h2>The Heroes and Foes of Atoma</h2>
            <ContentLayout>
                <CharacterProfile {...characterData.seras} />
                <NonPlayerCard {...npcData.cyrus} />
                <AntagonistCard {...antagonistData.gil} />
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
