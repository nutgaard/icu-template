import React from 'react';
import { Paper } from 'material-ui';

class Malredigering extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (!this.props.mal) {
            return null;
        }

        return (
            <Paper className="malredigering">
                <h3>Rediger mal</h3>
                <h4>{this.props.mal.navn}</h4>
            </Paper>
        );
    }
}

export default Malredigering;