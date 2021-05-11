import React from 'react';
import { withRouter } from 'react-router-dom';

import about from '../../assets/images/about.png';
import skills from '../../assets/images/skills.png';
import contact from '../../assets/images/contact.png';
import projects from '../../assets/images/projects.png';

import classes from './Logo.module.css';

const logo = (props) => {
    let imgIcon = null;
    const { location } = props;

    switch (location.pathname) {
        case '/':
            imgIcon = about;
            break;

        case '/skills':
            imgIcon = skills;
            break;

        case '/projects':
            imgIcon = projects;
            break;

        case '/contact':
            imgIcon = contact;
            break;

        default:
            imgIcon = { about };
    }

    return (
        <div className={classes.Logo}>
            <img src={imgIcon} alt={imgIcon} />
        </div>
    );
};

export default withRouter(logo);
