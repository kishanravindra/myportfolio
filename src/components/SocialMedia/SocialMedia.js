import React from 'react';
import { Box, IconButton } from '@material-ui/core';
import {
    Facebook,
    GitHub,
    LinkedIn,
    Twitter,
} from '@material-ui/icons';
import Logo from '../BottomLogo/Logo';

import classes from './SocialMedia.module.css';

const socialMedia = () => (
    <Box>
        <Box className={classes.Logo}>
            <Logo />
        </Box>

        <Box className={classes.SocialMedia}>
            <IconButton className={classes.IconButton}>
                <GitHub style={{ color: '#000' }} />
            </IconButton>
            <IconButton className={classes.IconButton}>
                <LinkedIn style={{ color: '#0e76a8' }} />
            </IconButton>
            <IconButton className={classes.IconButton}>
                <Twitter style={{ color: '#00acee' }} />
            </IconButton>
            <IconButton className={classes.IconButton}>
                <Facebook style={{ color: '#3b5998' }} />
            </IconButton>
        </Box>
    </Box>
);

// export default withRouter(socialMedia);
export default socialMedia;
