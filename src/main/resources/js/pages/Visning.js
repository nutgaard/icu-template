import React from 'react';
import StoreAwareComponent from './StoreAwarePage.js';
import MalStore from './../stores/MalStore.js';
import Actions from './../actions/Actions.js';
import { Paper } from 'material-ui';

function getState() {
    return {};
}


class Visning extends StoreAwareComponent {
    constructor(props) {
        super(props, MalStore);
        this.state = getState();
    }

    getState() {
        return {};
    }

    render() {
        return (
            <Paper className="sidevisning">
                <h1 className="hoved-header">Visning</h1>
            </Paper>
        );

    }
}

export default Visning;