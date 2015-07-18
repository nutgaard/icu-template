import React from 'react';
import { Link } from 'react-router';
import { Paper } from 'material-ui';

class Header extends React.Component {
    render() {
        let styles = {
            "backgroundColor": "#333333"
        };

        return (
            <Paper className="header" style={styles}>
                <h1 className="font1-5">Varslingsadmin</h1>
                <Link to="forside" className="font1-5">Forside</Link>
                <Link to="admin" className="font1-5">Malverk</Link>
                <Link to="visning" className="font1-5">Forhåndsvisning</Link>
            </Paper>
        );
    }
}

export default Header;