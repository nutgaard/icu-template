import React from 'react';
import StoreAwareComponent from './StoreAwarePage.js';
import HenvendelseStore from './../stores/HenvendelseStore.js';
import Actions from './../actions/Actions.js';
import { Paper } from 'material-ui';

function getState() {
    return {};
}


class MalAdmin extends StoreAwareComponent {
    constructor(props) {
        super(props, HenvendelseStore);
        this.state = getState();
    }

    getState() {
        return {};
    }


    render() {
        return (
            <Paper className="sidevisning">
                <h1 className="hoved-header">MalADmin</h1>
            </Paper>
        );

    }
}

export default MalAdmin;