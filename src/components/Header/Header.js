import React, { Component } from 'react';

import NavigationItems from '../NavigationItems';

class header extends Component {
    render() {
        return (
            <header>
                <nav>
                    <NavigationItems />
                </nav>
            </header>
        );
    }
}

export default header;
