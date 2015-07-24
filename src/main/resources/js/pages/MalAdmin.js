import React from 'react';
import StoreAwareComponent from './StoreAwarePage.js';
import MalStore from './../stores/MalStore.js';
import Actions from './../actions/Actions.js';
import Malvalg from './../components/Malvalg.js';
import Malredigering from './../components/Malredigering.js';
import { Paper, RaisedButton, Dialog, TextField } from 'material-ui';
import Divider from './../components/Divider.js';
import http from 'superagent';

class MalAdmin extends StoreAwareComponent {
    constructor(props) {
        super(props, MalStore);

        this.state = this.getState();
        this.state.errorMessage = '';

        this._openDialog = this._openDialog.bind(this);
        this._onDialogSubmit = this._onDialogSubmit.bind(this);
        this.lagNyMal = this.lagNyMal.bind(this);
    }

    componentDidMount() {
        super.componentDidMount();
        Actions.hentAlle();
    }

    getState() {
        return {
            maler: MalStore.hentAlle(),
            valgtMal: MalStore.valgtMal()
        };
    }

    _openDialog() {
        this.refs.dialog.show();
    }

    _onDialogSubmit() {
        let value = this.refs.malnavn.getValue();

        if (!value || value.length == 0) {
            this.setState({errorMessage: "Dette felted må være fylt ut."});
        } else {
            this.lagNyMal(value);
        }
    }

    lagNyMal(malnavn) {
        let that = this;
        http
            .post('/rest/mal')
            .send({navn: malnavn})
            .end((err, resp) => {
                if (err) {
                    that.setState({
                        errorMessage: resp.body
                    });
                } else {
                    Actions.nyMal(resp.body);
                    that.refs.dialog.dismiss();
                }
            });
    }

    render() {
        let buttonStyle = {
            "marginLeft": "1.71rem",
            "marginBottom": "1.71rem",
            "width": "8rem",
            "float": "right"
        };

        let standardActions = [
            {text: 'Cancel', ref: 'avbryt'},
            {text: 'Submit', onTouchTap: this._onDialogSubmit, ref: 'submit'}
        ];
        return (
            <Paper className="sidevisning maladmin">
                <h1 className="hoved-header">Maler</h1>
                <RaisedButton label="Ny mal" style={buttonStyle} onTouchTap={this._openDialog}/>
                <Malvalg maler={this.state.maler} valgtMal={this.state.valgtMal} />
                <Malredigering mal={this.state.valgtMal} />


                <Dialog title="Legg til ny mal" actions={standardActions} actionFocus="submit" ref="dialog">
                    <TextField
                        errorText={this.state.errorMessage}
                        hintText="Malnavn"
                        floatingLabelText="Legg til ny mal" ref="malnavn"/>
                </Dialog>
            </Paper>
        );

    }
}

export default MalAdmin;