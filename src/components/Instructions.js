import React from 'react';

import { Box, Typography } from '@material-ui/core';

import classes from './Instructions.module.css';

const instructions = () => (
    <Box>
        <Box className={classes.Root}>
            Host name: banklabssftp.com
        </Box>
        <Box className={classes.Details}>
            Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been
            the industrys standard dummy text ever since the
            1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen
            book.
        </Box>
        <Box className={classes.Info}>
            <Typography variant="caption1">
                Please save the following URL and Login ID
                associated with the SSH Key:{' '}
            </Typography>
        </Box>
    </Box>
);

export default instructions;
