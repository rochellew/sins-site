import { type NonPlayerCardProps } from '../components/NonPlayerCard';

export const NPC_DATA: NonPlayerCardProps[] = [
    {
        id: 'cyrus',
        name: 'Cyrus',
        role: 'Cartographer of the Grinning Troupe',
        status: 'Active' as const,
        imageSrc:
            'https://www.plushinarush.com/cdn/shop/products/14-purple-majesty-colorama-xl-bear-14106-6-583446920.jpg?v=1744931095',
        description:
            'The once rageful beast has calmed after the unknown fate of his daughter, and has devoted his intellect and aptitude for cartogrphay and craftsmanship to the cause of the Grinning troupe.\nHe has been a stalwart ally of the party, and has formed a special friendship with the cleric Seras.',
    },
];
