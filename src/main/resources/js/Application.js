import React from 'react';
import StoreAeareComponent from './components/StoreAwareComponent.js';
import HenvendelseStore from './stores/HenvendelseStore.js';
import Actions from './actions/Actions.js';
import WebAPI from './WebAPI';

function getState() {
    return {};
}


class Application extends StoreAwareComponent {
    constructor(props) {
        super(props, HenvendelseStore);
        this.state = getState();


        //En negativ side ved ES6, auto-binding fra React funker ikke. :(
        this._onChange = this._onChange.bind(this);
    }

    componentDidMount() {
        HenvendelseStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        HenvendelseStore.removeChangeListener(this._onChange);
    }

    _onChange() {
        this.setState(getState());
    }

    render() {
        return (
            <div className="application">
                <h1 className="hoved-header">Henvendelse-Datomic</h1>
            </div>
        );

    }
}

export default Application;