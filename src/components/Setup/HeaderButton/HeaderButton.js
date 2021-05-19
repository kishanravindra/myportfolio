/* eslint-disable react/prop-types */
import React from 'react';
import { Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import classes from './HeaderButton.module.css';

const useStyles = makeStyles(() => ({
    button: {
        backgroundColor: '#F9F9F9',
        minWidth: '0px',
        width: '30px',
        paddingLeft: '15px',
        border: '1px solid #333',
        marginRight: '5px',
    },
}));

const HeaderButton = (props) => {
    const { headerBtnArray, btnClickEvent } = props;
    const buttonStyle = useStyles();

    return (
        <Box className={classes.Root}>
            {headerBtnArray.map((el) => (
                <Box>
                    <Button
                        size="small"
                        key={el.btnName}
                        className={buttonStyle.button}
                        onClick={() =>
                            btnClickEvent(el.btnName)
                        }
                        startIcon={el.btnComponent}
                    />
                </Box>
            ))}
        </Box>
    );
};

export default HeaderButton;
