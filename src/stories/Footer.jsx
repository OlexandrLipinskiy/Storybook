import React from 'react';
import PropTypes from 'prop-types';

export const Footer = ({ link1, link2, link3, link4, company }) => {
    return (
        <footer class="py-3 my-4">
            <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">{link1}</a></li>
                <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">{link2}</a></li>
                <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">{link3}</a></li>
                <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">{link4}</a></li>
            </ul>
            <p class="text-center text-muted">{company}</p>
        </footer>
    );
};

Footer.propTypes = {
    link1: PropTypes.string.isRequired,
    link2: PropTypes.string.isRequired,
    link3: PropTypes.string.isRequired,
    link4: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
};

Footer.defaultProps = {
    link1: 'Home',
    link2: 'Features',
    link3: 'FAQs',
    link4: 'About',
    company: '© 2022 Company, Inc',
};
