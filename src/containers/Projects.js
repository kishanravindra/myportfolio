import React from 'react';
import { Box, Divider } from '@material-ui/core';

import Setup from '../components/Setup/Setup';
import SetupItem from '../components/SetupItem';
import Instructions from '../components/Instructions';

class Projects extends React.Component {
    selectedBtnItem = (val) => {
        // eslint-disable-next-line no-alert
        alert(`val ${val}`);
    };

    viewFileNamingConventionsBtnAction = () => {
        console.log('naming conventions');
    };

    render() {
        return (
            <Box>
                <Setup
                    headerTitle="Account Status"
                    textAlignment="right"
                    footerText="Internal Bank ID: 42"
                    footerElementType="text"
                >
                    <Box
                        style={{
                            margin: '20px 10px',
                            border: '1px solid #ccc',
                            borderRadius: '5px',
                            backgroundColor: '#F9F9F9',
                        }}
                    >
                        <SetupItem
                            itemId="1"
                            itemName="Account Setup"
                            bgColor="#F9F9F9"
                            btnArray={[
                                {
                                    btnName: 'Create',
                                    btnAction: 'create-acc',
                                },
                                {
                                    btnName: 'Delete',
                                    btnAction: 'delete-acc',
                                },
                            ]}
                            itemClicked={
                                this.selectedBtnItem
                            }
                        />
                        <Divider />

                        <SetupItem
                            itemId="2"
                            itemName="SSH Key"
                            bgColor="#FEFEFE"
                            btnArray={[
                                {
                                    btnName: 'Create',
                                    btnAction: 'create-ssh',
                                },
                                {
                                    btnName: 'Delete',
                                    btnAction: 'delete-ssh',
                                },
                            ]}
                            itemClicked={
                                this.selectedBtnItem
                            }
                        />
                        <Divider />

                        <SetupItem
                            itemId="3"
                            itemName="SSH Password"
                            bgColor="#F9F9F9"
                            btnArray={[
                                {
                                    btnName:
                                        'Generate Password',
                                    btnAction:
                                        'generate-password',
                                },
                            ]}
                            itemClicked={
                                this.selectedBtnItem
                            }
                        />
                    </Box>
                </Setup>
                {/*------------------*/}
                <Setup
                    headerTitle="Instructions/FAQ"
                    textAlignment="left"
                    footerText="View file naming conventions"
                    type="Instructions"
                    footerElementType="button"
                    footerBtnClickEvent={
                        this
                            .viewFileNamingConventionsBtnAction
                    }
                >
                    <Instructions />
                    <Box
                        style={{
                            margin: '20px 10px',
                            border: '1px solid #ccc',
                            borderRadius: '5px',
                            backgroundColor: '#F9F9F9',
                        }}
                    >
                        <SetupItem
                            itemId="URL"
                            itemName="banklabssftp.com"
                            bgColor="#F9F9F9"
                        />
                        <Divider />
                        <SetupItem
                            itemId="Login ID"
                            itemName="BD34#1234"
                            bgColor="#F9F9F9"
                        />
                    </Box>
                </Setup>
            </Box>
        );
    }
}

export default Projects;
