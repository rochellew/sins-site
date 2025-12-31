import CharacterDetail from '../components/CharacterDetail';
import { CharacterType } from '../types/character';

const AntagonistDetailPage = () => {
    return <CharacterDetail characterType={CharacterType.ANTAGONIST} />;
};
export default AntagonistDetailPage;