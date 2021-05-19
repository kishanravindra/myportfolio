/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import {
    Box,
    Button,
    // IconButton,
    List,
    ListSubheader,
} from '@material-ui/core';

import HeaderButton from './HeaderButton/HeaderButton';

import classes from './Setup.module.css';

const SetUp = (props) => {
    const {
        headerTitle,
        children,
        textAlignment,
        footerText,
        footerElementType,
        footerBtnClickEvent,
        headerBtnArray,
        showListHeaderBtn,
        headerBtnClickEvent,
    } = props;

    let footerElement = null;
    switch (footerElementType) {
        case 'text':
            footerElement = (
                <Box
                    className={classes.FooterText}
                    textAlign={textAlignment}
                >
                    {footerText}
                </Box>
            );
            break;
        case 'button':
            footerElement = (
                <Button onClick={footerBtnClickEvent}>
                    <Box
                        className={classes.FooterButton}
                        textAlign={textAlignment}
                    >
                        {footerText}
                    </Box>
                </Button>
            );
            break;
        default:
            footerElement = (
                <Box
                    className={classes.FooterText}
                    textAlign={textAlignment}
                >
                    {footerText}
                </Box>
            );
    }

    return (
        <Box className={classes.Setup}>
            <List
                subheader={
                    <Box className={classes.ListHeader}>
                        <ListSubheader
                            style={{ fontSize: '18px' }}
                        >
                            {headerTitle}
                        </ListSubheader>
                        {showListHeaderBtn ? (
                            <HeaderButton
                                headerBtnArray={
                                    headerBtnArray
                                }
                                btnClickEvent={
                                    headerBtnClickEvent
                                }
                            />
                        ) : null}
                    </Box>
                }
            >
                <Box>{children}</Box>
                {footerElement}
            </List>
        </Box>
    );
};

export default SetUp;
