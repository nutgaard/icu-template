import React from 'react';
import RouterMixin from './../utils/RouterMixinShim.js';
import { Paper, RaisedButton } from 'material-ui';
import { delay } from './../utils/utils.js';

const buttonstyles = {
    "marginRight": "1rem",
    "marginTop": "1rem"
};

class Forside extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Paper className="sidevisning">
                <h1 className="hoved-header">Forside</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa doloribus, enim et iusto obcaecati quia quidem repellendus similique sunt unde vel veniam, voluptatibus. Delectus deleniti hic, iure odio quaerat vel.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet ea earum non nostrum pariatur, quidem voluptates voluptatibus? Adipisci at corporis cupiditate dignissimos earum eos iste quae soluta tenetur. Earum, obcaecati!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores atque, consectetur culpa cupiditate delectus dolore est et eum illum, inventore iusto nisi non officia placeat qui repellat repellendus vel voluptatibus.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus eius maiores nemo quaerat voluptatibus! Assumenda at atque dignissimos dolores, eos expedita facere fugiat necessitatibus nobis officiis praesentium quam quo totam.</p>

                <RaisedButton linkButton={true} label="Malverk" style={buttonstyles}onClick={delay(this.props.navigation.transitionTo.bind(null, 'admin'))} />
                <RaisedButton linkButton={true} label="Forhåndsvisning" style={buttonstyles} onClick={delay(this.props.navigation.transitionTo.bind(null, 'visning'))} />
            </Paper>
        );

    }
}

Forside = RouterMixin.shim(Forside);

export default Forside;