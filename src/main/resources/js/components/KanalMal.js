import React from 'react';
import { Paper, TextField, FlatButton } from 'material-ui';
import Actions from './../actions/Actions.js';

class KanalMal extends React.Component {
    constructor(props) {
        super(props);

        this._slettkanal = this._slettkanal.bind(this);
    }

    _slettkanal(kanal) {
        Actions.slettKanal(this.props.mal, kanal);
    }

    getValue() {
        return this.refs.text.getValue();
    }

    render() {
        let that = this;

        let style = {
            "width": "100%"
        };

        let buttonstyle = {
            "float": "right",
            "top": "-1rem"
        };

        return (
            <div className="kanalmal">
                <FlatButton label="Slett" secondary={true} style={buttonstyle} onTouchTap={that._slettkanal.bind(that, this.props.kanalmal.kanal)} />
                <h5>{this.props.kanalmal.kanal}</h5>
                <TextField
                    ref="text"
                    defaultValue={this.props.kanalmal.mal}
                    multiLine={true}
                    style={style}
                />
            </div>
        );
    }
}

export default KanalMal;