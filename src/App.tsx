import CampaignHeader from './components/CampaignHeader';
import CampaignFooter from './components/CampaignFooter';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WorldPage from './pages/WorldPage';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <CampaignHeader
                    campaignTitle="Sins of His Holiness"
                    subtitle="Divinity in a Domain of Dread"
                />

                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/world" element={<WorldPage />} />

                    <Route
                        path="*"
                        element={
                            <main>
                                <h1>
                                    404: Page Not Found. In His Holiness's Name,
                                    find your way back...
                                </h1>
                            </main>
                        }
                    />
                </Routes>

                <CampaignFooter />
            </div>
        </BrowserRouter>
    );
}

export default App;
