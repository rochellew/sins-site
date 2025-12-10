'use strict';
exports.__esModule = true;
var react_1 = require('react');
require('./CharacterProfile.css');
var CharacterProfile = function (_a) {
    var name = _a.name,
        race = _a.race,
        classRole = _a.classRole,
        level = _a.level,
        status = _a.status,
        description = _a.description,
        imageSrc = _a.imageSrc,
        keyStats = _a.keyStats;
    var statusClass = status.toLowerCase();
    return react_1['default'].createElement(
        'article',
        { className: 'character-profile ' + statusClass },
        react_1['default'].createElement(
            'div',
            { className: 'profile-header' },
            react_1['default'].createElement('img', {
                src: imageSrc,
                alt: 'Portrait of ' + name,
                className: 'character-portrait',
            }),
            react_1['default'].createElement(
                'div',
                { className: 'header-info' },
                react_1['default'].createElement('h2', null, name),
                react_1['default'].createElement(
                    'p',
                    { className: 'status-tag status-' + statusClass },
                    status,
                ),
            ),
        ),
        react_1['default'].createElement(
            'div',
            { className: 'profile-details' },
            react_1['default'].createElement(
                'p',
                null,
                react_1['default'].createElement('strong', null, 'Race:'),
                ' ',
                race,
            ),
            react_1['default'].createElement(
                'p',
                null,
                react_1['default'].createElement('strong', null, 'Class:'),
                ' ',
                classRole,
            ),
            react_1['default'].createElement(
                'p',
                null,
                react_1['default'].createElement('strong', null, 'Level:'),
                ' ',
                level,
            ),
        ),
        react_1['default'].createElement(
            'div',
            { className: 'key-stats' },
            react_1['default'].createElement(
                'div',
                { className: 'stat-box' },
                react_1['default'].createElement(
                    'span',
                    { className: 'stat-value' },
                    keyStats.hp,
                ),
                react_1['default'].createElement(
                    'span',
                    { className: 'stat-label' },
                    'HP',
                ),
            ),
            react_1['default'].createElement(
                'div',
                { className: 'stat-box' },
                react_1['default'].createElement(
                    'span',
                    { className: 'stat-value' },
                    keyStats.ac,
                ),
                react_1['default'].createElement(
                    'span',
                    { className: 'stat-label' },
                    'AC',
                ),
            ),
            react_1['default'].createElement(
                'div',
                { className: 'stat-box' },
                react_1['default'].createElement(
                    'span',
                    { className: 'stat-value' },
                    keyStats.passivePerception,
                ),
                react_1['default'].createElement(
                    'span',
                    { className: 'stat-label' },
                    'Passive Perception',
                ),
            ),
        ),
        react_1['default'].createElement(
            'div',
            { className: 'profile-description' },
            react_1['default'].createElement('h4', null, 'Background'),
            react_1['default'].createElement('p', null, description),
        ),
    );
};
exports['default'] = CharacterProfile;
