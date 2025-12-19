import { useEffect } from 'react';
import {useParams, Link} from 'react-router-dom';
import { ANTAGONIST_DATA } from '../data/antagonistData';

const AntagonistDetailPage = () => {
    const {antagonistId} = useParams<{antagonistId: string}>();
    const antagonist = ANTAGONIST_DATA.find(ant => ant.id === antagonistId);

    useEffect(() => {
        if(antagonist) {
            document.title = `Sins - ${antagonist.name}`;
        } else {
            document.title = 'Sins - Character Not Found'
        }
    }, [antagonist]);

    if(!antagonist) {
        return (
            <main>
                <h1>Antagonist Not Found</h1>
                <p>This antagonist does not yet exist within the world of Terra Sancta.</p>
                <Link to="/characters">Back to Characters</Link>
            </main>
        );
    }

    const statusClass = antagonist.status.toLowerCase();

    return(
        <main className="antagonist-detail">
            <div>
                <h1>{antagonist.name}</h1>
            </div>
        </main>
    );
};
export default AntagonistDetailPage;