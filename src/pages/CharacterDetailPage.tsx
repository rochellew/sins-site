import CharacterDetail from '../components/CharacterDetail';
import { CharacterType } from '../types/character';

const CharacterDetailPage = () => {
    return <CharacterDetail characterType={CharacterType.PLAYER} />;
};

export default CharacterDetailPage;