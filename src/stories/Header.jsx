import React from 'react';
import PropTypes from 'prop-types';

export const Header = ({ title, link, dropdown, options, search }) => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{ padding: '10px 15px' }}>
            <a class="navbar-brand" href="#">{title}</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent" style={{ justifyContent: 'space-between' }}>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">{link}</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {dropdown}
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            {options.map(option => (
                                <a class="dropdown-item" href="#">{option}</a>
                            ))}
                        </div>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0" style={{ display: 'flex', gap: '10px' }}>
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">{search}</button>
                </form>
            </div>
        </nav>
    );
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    dropdown: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    search: PropTypes.string.isRequired,
};

Header.defaultProps = {
    title: 'Title', 
    link: 'Link',
    dropdown: 'Dropdown', 
    options: [
        'Action',
        'Another action',
        'Something else here',
    ], 
    search: 'Search',
};
