import { Link } from 'gatsby';
import * as React from 'react';
import { container, heading, navLinks, navLinkItem, navLinkText } from './layout.module.css';

export interface LayoutProps {
    pageTitle: string;
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ pageTitle, children }) => {
    return (
        <div className={container}>
            <header>
                <nav>
                    <ul className={navLinks}>
                        <li className={navLinkItem}>
                            <Link to="/" className={navLinkText}>
                                Home
                            </Link>
                        </li>
                        <li className={navLinkItem}>
                            <Link to="/about" className={navLinkText}>
                                About
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                <h1 className={heading}>{pageTitle}</h1>
                {children}
            </main>
            <footer>
                <p>© 2023 Demo Gatsby</p>
            </footer>
        </div>
    );
};

export default Layout;
