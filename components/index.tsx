import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Login from './login';
import Main from './main';

export default class App extends Component {
    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene key="login" component={Login} title="Login" initial={true} />
                    <Scene key="main" component={Main} title="Main" />
                </Scene>
            </Router>
        )
    }
}

