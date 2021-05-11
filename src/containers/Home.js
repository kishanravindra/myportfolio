import React from 'react';

import {
    Button,
    makeStyles,
    Typography,
    Box,
} from '@material-ui/core';

import Aboutme from '../components/AboutMe/Aboutme';
import classes from './Home.module.css';

const home = () => (
    <Box className={classes.FirstBox}>
        <Aboutme />
    </Box>
);
export default home;
