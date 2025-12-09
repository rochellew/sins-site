import React, { type ReactNode } from 'react';
import './ContentLayout.css';

interface ContentLayoutProps {
    children: ReactNode;
}

const ContentLayout: React.FC<ContentLayoutProps> = ({ children }) => {
    return <section className="content-layout">{children}</section>;
};

export default ContentLayout;
