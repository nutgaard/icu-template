import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler, Redirect} from 'react-router';

import App from './Application.js';
import Forside from './pages/Forside.js';
import MalAdmin from './pages/MalAdmin.js';
import Visning from './pages/Visning.js';


let routes = (
    <Route name="app" path="/" handler={App}>
        <Route name="forside" handler={Forside} />
        <Route name="admin" path="admin" handler={MalAdmin} />
        <Route name="visning" path="visning" handler={Visning} />
        <Redirect from="/" to="forside" />
    </Route>
);

Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.body);
});