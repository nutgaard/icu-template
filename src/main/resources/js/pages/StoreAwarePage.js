import React from 'react';

class StoreAwareComponent extends React.Component {
    constructor(props, stores) {
        super(props);
        this._onChange = this._onChange.bind(this);
        this.getState = this.getState.bind(this);

        this.stores = Array.isArray(stores) ? stores : [stores];
        this.state = this.getState();
    }

    componentDidMount() {
        this.stores.forEach(function (store) {
            store.addChangeListener(this._onChange);
        }.bind(this));
    }

    componentWillUnmount() {
        this.stores.forEach(function (store) {
            store.removeChangeListener(this._onChange);
        }.bind(this));
    }

    getState() {
        throw "This is an abstract class. You must extends it and implement the 'getState' method";
    }

    _onChange() {
        this.setState(this.getState());
    }
}

export default StoreAwareComponent;