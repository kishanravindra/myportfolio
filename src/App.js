import React, { Component } from 'react';
import {
    createMuiTheme,
    ThemeProvider,
    Box,
} from '@material-ui/core';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout';
import Home from './containers/Home';
import Skills from './containers/Skills';
import Contact from './containers/Contact';

import classes from './App.module.css';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#2c3e50',
        },
        secondary: {
            main: '#1abc9c',
        },
    },
    typography: {
        fontFamily: 'Quicksand',
        fontWeightLight: 400,
        fontWeightRegular: 500,
        fontWeightMedium: 600,
        fontWeightBold: 700,
        fontSize: 24,
    },
});

class App extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <Box className={classes.Home}>
                    <Layout>
                        <Switch>
                            <Route
                                path="/contact"
                                component={Contact}
                            />
                            <Route
                                path="/skills"
                                component={Skills}
                            />
                            <Route
                                path="/"
                                component={Home}
                            />
                        </Switch>
                    </Layout>
                    <Box className={classes.SecondBox}>
                        Hello
                    </Box>
                </Box>
            </ThemeProvider>
        );
    }
}

export default App;
