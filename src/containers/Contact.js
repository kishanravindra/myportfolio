import React from 'react';
import { Box, Typography } from '@material-ui/core';

import mail from '../assets/images/mail.png';

import classes from './Contact.module.css';

const contact = (props) => (
    <Box className={classes.Contact}>
        <img src={mail} alt="mail" />
        <hr />
        <Typography
            style={{
                marginTop: '28px',
                fontSize: '18px',
            }}
        >
            E-Mail:{' '}
            <a
                href="mailto:KishanRavindra@gmail.com"
                style={{
                    textDecoration: 'none',
                    color: '#256188',
                }}
            >
                KishanRavindra@gmail.com
            </a>
        </Typography>
        <Typography
            style={{
                marginTop: '28px',
                fontSize: '18px',
            }}
        >
            Skype: rkishan91
        </Typography>
    </Box>
);

export default contact;
