/* eslint-disable react/prop-types */
import React from 'react';

import {
    Box,
    Button,
    Divider,
    Typography,
} from '@material-ui/core';

import classes from './SetupItem.module.css';

const SetupItems = (props) => {
    const {
        itemId,
        itemName,
        bgColor,
        btnArray,
        itemClicked,
    } = props;
    return (
        <Box
            className={classes.Root}
            style={{
                backgroundColor: bgColor,
            }}
        >
            <Box
                className={
                    btnArray !== undefined
                        ? [
                              classes.Col1,
                              classes.Col1_Account,
                          ].join(' ')
                        : [
                              classes.Col1,
                              classes.Col1_Instructions,
                          ].join(' ')
                }
            >
                {itemId}
            </Box>

            <Divider orientation="vertical" />

            <Typography
                variant="subtitle1"
                className={
                    btnArray !== undefined
                        ? [
                              classes.Col2,
                              classes.Col2_Account,
                          ].join(' ')
                        : [
                              classes.Col2,
                              classes.Col2_Instructions,
                          ].join(' ')
                }
                style={{
                    backgroundColor:
                        btnArray !== undefined
                            ? bgColor
                            : '#D8EECF',
                    fontSize: '16px',
                }}
            >
                {itemName}
            </Typography>

            {btnArray !== undefined ? (
                <Divider orientation="vertical" />
            ) : null}

            <Box
                className={classes.Col3}
                style={{
                    width:
                        btnArray !== undefined
                            ? '200px'
                            : '0px',
                }}
            >
                {btnArray !== undefined
                    ? btnArray.map((btn) => (
                          <Box
                              className={classes.BtnMain}
                              key={btn.btnAction}
                          >
                              <Button
                                  size="small"
                                  style={{
                                      fontSize: '14px',
                                      backgroundColor:
                                          '#4FAD4A',
                                      display: 'fixed',
                                  }}
                                  onClick={() =>
                                      itemClicked(
                                          btn.btnAction
                                      )
                                  }
                              >
                                  {btn.btnName}
                              </Button>
                          </Box>
                      ))
                    : null}
            </Box>
        </Box>
    );
};

export default SetupItems;
