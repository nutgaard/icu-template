import React from 'react';
import { DropDownMenu } from 'material-ui';
import Actions from './../actions/Actions.js';

class Malvalg extends React.Component {
    constructor(props) {
        super(props);

        this._onChange = this._onChange.bind(this);
    }

    _onChange(_, index, item) {
        Actions.velgMal(item.payload);
    }

    render() {
        let dropdownStyle = {
            "width": "100%",
            "display": "block",
            "marginBottom": "3rem"
        };


        let menuItems = this.props.maler.slice(0).map((mal) => {
            return {
                payload: mal,
                text: mal.navn
            }
        });
        let valgtMalIndex = this.props.maler.indexOf(this.props.valgtMal);
        if (valgtMalIndex < 0) {
            valgtMalIndex = undefined;
        }

        return (
            <DropDownMenu
                autoWidth={false}
                style={dropdownStyle}
                menuItems={menuItems}
                selectedIndex={valgtMalIndex}
                onChange={this._onChange}
            />
        );
    }
}

export default Malvalg;