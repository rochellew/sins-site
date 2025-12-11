import { useState } from 'react';
import './SearchableTabs.css';

interface TabConfig {
    label: string;
    items: any[];
    renderItem: (item: any) => React.ReactNode;
    searchFilter: (item: any, searchTerm: string) => boolean;
}

interface SearchableTabsProps {
    tabs: TabConfig[];
}

function SearchableTabs({ tabs }: SearchableTabsProps) {
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');

    const activeTab = tabs[activeTabIndex];
    const filteredItems = activeTab.items.filter((item) =>
        activeTab.searchFilter(item, searchTerm.toLowerCase())
    );

    return (
        <div className="searchable-tabs">
            <div className="tab-buttons">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`tab-btn ${index === activeTabIndex ? 'active' : ''}`}
                        onClick={() => {
                            setActiveTabIndex(index);
                            setSearchTerm(''); // Reset search when switching tabs
                        }}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className="tab-search">
                <input
                    type="text"
                    placeholder={`Search ${activeTab.label}...`}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />
            </div>

            <div className="tab-content">
                {filteredItems.length > 0 ? (
                    <div className="items-grid">
                        {filteredItems.map((item, index) => (
                            <div key={index}>{activeTab.renderItem(item)}</div>
                        ))}
                    </div>
                ) : (
                    <p className="no-results">No results found for "{searchTerm}"</p>
                )}
            </div>
        </div>
    );
}

export default SearchableTabs;