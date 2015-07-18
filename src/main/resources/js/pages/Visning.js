import React from 'react';
import StoreAwareComponent from './StoreAwarePage.js';
import HenvendelseStore from './../stores/HenvendelseStore.js';
import Actions from './../actions/Actions.js';

function getState() {
    return {};
}


class Visning extends StoreAwareComponent {
    constructor(props) {
        super(props, HenvendelseStore);
        this.state = getState();
    }

    getState() {
        return {};
    }

    render() {
        return (
            <div className="sidevisning">
                <h1 className="hoved-header">Visning</h1>
            </div>
        );

    }
}

export default Visning;