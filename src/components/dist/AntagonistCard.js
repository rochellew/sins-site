'use strict';
exports.__esModule = true;
var react_1 = require('react');
require('./AntagonistCard.css');
var fa_1 = require('react-icons/fa');
var AntagonistCard = function (_a) {
    var name = _a.name,
        title = _a.title,
        status = _a.status,
        description = _a.description,
        imageSrc = _a.imageSrc,
        loreLink = _a.loreLink;
    var statusClass = status.toLowerCase();
    var isDefeated = status === 'Defeated';
    var cardClassName =
        'antagonist-card ' + (isDefeated ? 'defeated-look' : '');
    return react_1['default'].createElement(
        'article',
        { className: cardClassName },
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
                    {
                        className:
                            'status-tag status-antagonist status-' +
                            statusClass,
                    },
                    status,
                ),
                react_1['default'].createElement(
                    'p',
                    { className: 'antagonist-title' },
                    title,
                ),
            ),
            loreLink &&
                react_1['default'].createElement(
                    'a',
                    { href: loreLink, className: 'lore-link' },
                    react_1['default'].createElement(fa_1.FaScroll, null),
                    ' View Lore Index',
                ),
        ),
        react_1['default'].createElement(
            'div',
            { className: 'profile-description' },
            react_1['default'].createElement('p', null, description),
        ),
    );
};
exports['default'] = AntagonistCard;
