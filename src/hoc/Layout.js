/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Box } from '@material-ui/core';

import Header from '../components/Header/Header';
import SocialMedia from '../components/SocialMedia/SocialMedia';

import classes from './Layout.module.css';

class Layout extends Component {
    render() {
        const { children } = this.props;
        return (
            <>
                <div className={classes.Layout_Div}>
                    <Header />
                    <main>{children}</main>
                    <Box className={classes.SocialMedia}>
                        <SocialMedia />
                    </Box>
                </div>
            </>
        );
    }
}

export default Layout;
