import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = ({ title }) => (
    <footer>
        <section>
            {title ? <div className="title"><Link to="/">{title}</Link></div> : null}
        </section>
        <section>
            <p>© 2019 All Rights Reserved.</p>
        </section>
    </footer>
);