import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './Navigationitem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>
            About Me
        </NavigationItem>
        <NavigationItem link="/skills">
            Skills
        </NavigationItem>

        <NavigationItem link="/projects">
            Projects
        </NavigationItem>

        <NavigationItem link="/contact">
            Contact
        </NavigationItem>
    </ul>
);

export default navigationItems;
