import React from 'react';
import { Box } from '@material-ui/core';

import Schedule from '@material-ui/icons/Schedule';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';

import Setup from '../components/Setup/Setup';

const headerBtnArraySource = [
    { btnComponent: <Schedule />, btnName: 'schedule' },
    {
        btnComponent: <AssignmentTurnedInIcon />,
        btnName: 'assignmentTurnedInIcon',
    },
];

class SecondBlock extends React.Component {
    headerBtnClick = (val) => {
        alert(`Btn Clicked: ${val}`);
    };

    render() {
        return (
            <Box>
                <Setup
                    headerTitle="Most recent Files FROM BankLabs"
                    showListHeaderBtn
                    headerBtnArray={headerBtnArraySource}
                    headerBtnClickEvent={
                        this.headerBtnClick
                    }
                >
                    Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem
                    Ipsum has been the industrys standard
                    dummy text ever since the 1500s.
                </Setup>
                {/*------------------*/}
                <Setup headerTitle="Files FROM BankLabs">
                    Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem
                    Ipsum has been the industrys standard
                    dummy text ever since the 1500s.
                </Setup>
            </Box>
        );
    }
}

export default SecondBlock;
