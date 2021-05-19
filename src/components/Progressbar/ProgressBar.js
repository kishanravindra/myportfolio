import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { ProgressBarLine } from 'react-progressbar-line';

import classes from './ProgressBar.module.css';

const mobileTech = [
    { skillName: 'Objective-C', value: 80 },
    { skillName: 'Swift', value: 80 },
    { skillName: 'Swift UI', value: 45 },
    { skillName: 'React Native', value: 65 },
];

const webTech = [
    { skillName: 'React Js & Redux', value: 60 },
    { skillName: 'Node Js & MongoDB', value: 45 },
    { skillName: 'HTML & CSS', value: 50 },
];

const progressBar = () => {
    const showProgressBarWithTitle = (
        title,
        dataSource
    ) => (
        <Box>
            <Box
                style={{
                    textAlign: 'center',
                    marginTop: '5px',
                }}
            >
                <Typography variant="caption">
                    {title}
                </Typography>
            </Box>
            {dataSource.map((el) => (
                <Box className={classes.ProgressBar}>
                    <Box
                        className={
                            classes.ProgressBarContent
                        }
                    >
                        {el.skillName}:{' '}
                        <span
                            className={classes.ProgressSpan}
                        >
                            {el.value}
                        </span>
                    </Box>
                    <ProgressBarLine
                        value={el.value}
                        trailWidth={2}
                        styles={{
                            path: {
                                stroke: '#256188',
                            },
                            trail: {
                                stroke: '#9ebac9',
                            },
                            text: {
                                fill: '#1abc9c',
                                textAlign: 'center',
                                fontSize: '0px',
                            },
                        }}
                    />
                </Box>
            ))}
        </Box>
    );

    return (
        <Box>
            {showProgressBarWithTitle(
                '❖ Mobile Technologies ❖',
                mobileTech
            )}
            {showProgressBarWithTitle(
                '❖ Web Technologies ❖',
                webTech
            )}
            <Box className={classes.Othertech}>
                ✦ Other technologies and Tools ✦ <br /> Git,
                AWS services, Firebase, CoreData,
                <br /> Xcode, Expo, CI & CD, Scrum, Agile &
                Kanban.
            </Box>
        </Box>
    );
};

export default progressBar;
