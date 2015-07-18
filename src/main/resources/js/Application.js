import React from 'react';
import { RouteHandler } from 'react-router';
import mui from 'material-ui';

let ThemeManager = new mui.Styles.ThemeManager();
ThemeManager.setTheme(ThemeManager.types.LIGHT);

import Header from './components/Header.js';
import Centering from './components/Centering.js';

class Application extends React.Component {

    getChildContext() {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        };
    }

    render() {
        return (
            <div className="application">
                <Header></Header>
                <div className="content">
                    <Centering>
                        <RouteHandler />
                    </Centering>
                </div>
            </div>
        );
    }
}

Application.childContextTypes = {
    muiTheme: React.PropTypes.object
};

export default Application;