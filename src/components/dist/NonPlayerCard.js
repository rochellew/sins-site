"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./NonPlayerCard.css");
var NonPlayerCard = function (_a) {
    var name = _a.name, role = _a.role, status = _a.status, description = _a.description, imageSrc = _a.imageSrc;
    var statusClass = status.toLowerCase();
    return (react_1["default"].createElement("article", { className: "non-player-card" },
        react_1["default"].createElement("div", { className: "profile-header" },
            react_1["default"].createElement("img", { src: imageSrc, alt: "Portrait of " + name, className: "character-portrait" }),
            react_1["default"].createElement("div", { className: "header-info" },
                react_1["default"].createElement("h2", null, name),
                react_1["default"].createElement("p", { className: "status-tag status-" + statusClass }, status),
                react_1["default"].createElement("p", { className: "npc-role" }, role))),
        react_1["default"].createElement("div", { className: "profile-description" },
            react_1["default"].createElement("p", null, description))));
};
exports["default"] = NonPlayerCard;
