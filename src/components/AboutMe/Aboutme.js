import React from 'react';
import { Box, Typography } from '@material-ui/core';

import classes from './Aboutme.module.css';

const aboutme = () => (
    <Box className={classes.AboutMe}>
        <Typography
            color="secondary"
            variant="h6"
            className={classes.AboutMe_Animate}
        >
            About me
        </Typography>
        <Box className={classes.Details}>
            <span>
                I have been working as iOS developer in
                Qwinix Technologies Pvt Ltd. With 8 Years of
                exhaustive experience in building mobile
                application and strong analytical,
                mathematical and logical skills, today i
                stand as the developer with go getter
                attitude and making the UI/UX designers
                happy with pixel perfect layouting in iOS.{' '}
                <br />
                <br />
                Besides my technical skills and experience,
                the strategical and analyzing skills i’ve
                developed over time always makes my stand
                out among the crowd. Also the willingness to
                get the perfect outcome of the applications
                Which I develop and never compromising
                quality and put QA in a tough place to find
                bugs. <br />
                <br />
                In addition to the reusable, object oriented
                code i implement, I have a strong liking for
                implementing the animation and new
                Interactive design in the mobile
                applications. I love it when math and
                physics principles get into the code to get
                the incredible animations
            </span>
        </Box>
    </Box>
);

export default aboutme;
