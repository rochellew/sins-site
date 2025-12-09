import React from 'react';
import TabbedContent from '../components/TabbedContent';
import ContentLayout from '../components/ContentLayout';
import ContentCard from '../components/ContentCard';
import { loreTabs } from '../data/content.tsx'; // We'll use this centralized data

const WorldPage: React.FC = () => {
    return (
        <main>
            <h1>The World of Terra Sancta: Lore Index</h1>
            <TabbedContent tabs={loreTabs} />

            <ContentCard title="Key Locations">
                <p>Maps, cities, and major geographic features will go here.</p>
            </ContentCard>

            <ContentLayout>
                <ContentCard title="Factions & Guilds">...</ContentCard>
                <ContentCard title="Bestiary">...</ContentCard>
            </ContentLayout>
        </main>
    );
};

export default WorldPage;
