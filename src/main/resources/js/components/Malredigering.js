import React from 'react';
import { Paper, IconMenu, IconButton, RaisedButton } from 'material-ui';
let MenuItem = require('material-ui/lib/menus/menu-item');
import VerticalIcon from './MoreVerticalIcon.js';
import KanalMal from './KanalMal.js';
import Actions from './../actions/Actions.js';


class Malredigering extends React.Component {
    constructor(props) {
        super(props);

        this._leggTil = this._leggTil.bind(this);
        this._lagreMal = this._lagreMal.bind(this);
    }

    _leggTil(kanal) {
        Actions.leggTilKanal(this.props.mal, kanal);
    }

    _lagreMal() {
        Actions.lagreMal(this.props.mal);
    }

    render() {
        if (!this.props.mal) {
            return null;
        }

        let kanalmaler = this.props.mal.maler.map((kanalmal) => {
            return <KanalMal key={kanalmal.kanal} mal={this.props.mal} kanalmal={kanalmal}/>;
        });


        let kanaler = ['NAV', 'MAIL', 'SMS'];
        let eksisterendeKanaler = this.props.mal.maler.map((mal) => {
            return mal.kanal;
        });

        let that = this;
        let leggTilOptions = kanaler
            .filter((kanal) => {
                return eksisterendeKanaler.indexOf(kanal) === -1;
            })
            .map((kanal, index) => {
                return <MenuItem key={kanal} index={index} primaryText={"Legg til " + kanal} onTouchTap={that._leggTil.bind(that, kanal)}/>
            });

        let style = {
            "float": "right",
            "top": "-1rem",
            "right": "-1rem",
            "display": leggTilOptions.length === 0 ? 'none' : 'initial'
        };

        return (
            <Paper className="malredigering">
                <IconMenu iconButtonElement={<IconButton><VerticalIcon /></IconButton>} style={style}>
                    {leggTilOptions}
                </IconMenu>

                <h3>Rediger mal</h3>
                <h4>{this.props.mal.navn}</h4>

                {kanalmaler}

                <RaisedButton label="Lagre tekster" onTouchTap={this._lagreMal}/>
            </Paper>
        );
    }
}

export default Malredigering;