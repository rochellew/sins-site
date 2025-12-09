import React, { type ReactNode } from 'react';
import './ContentCard.css';

interface ContentCardProps {
    title: string;
    children: ReactNode;
}

const ContentCard: React.FC<ContentCardProps> = ({ title, children }) => {
    return (
        <div className="content-card">
            <h3 className="card-title">{title}</h3>
            <div className="card-content">{children}</div>
        </div>
    );
};

export default ContentCard;
