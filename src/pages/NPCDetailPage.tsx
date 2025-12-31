import CharacterDetail from '../components/CharacterDetail';
import { CharacterType } from '../types/character';

const NPCDetailPage = () => {
    return <CharacterDetail characterType={CharacterType.NPC} />;
};

export default NPCDetailPage;