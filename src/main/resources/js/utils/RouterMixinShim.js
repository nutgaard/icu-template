var React = require('react');

import Router from 'react-router';
import { Route, Link, RouteHandler } from 'react-router';

var mixin = Component => React.createClass({
    mixins: [Router.State, Router.Navigation],

    // take care of new transition API, see https://github.com/rackt/react-router/pull/1158
    routerWillEnter(router, nextState, route) {
        if (this.refs.component && this.refs.component.routerWillEnter) {
            this.refs.component.routerWillEnter(router, nextState, route);
        }
    },

    routerWillLeave(router, nextState, route) {
        if (this.refs.component && this.refs.component.routerWillLeave) {
            this.refs.component.routerWillLeave(router, nextState, route);
        }
    },

    render() {
        var stateMixinApi = {
            getPath: this.getPath,
            getPathname: this.getPathname,
            getParams: this.getParams,
            getQuery: this.getQuery,
            isActive: this.isActive,
            getRoutes: this.getRoutes
        };
        var navigationMixinApi = {
            transitionTo: this.transitionTo,
            replaceWith: this.replaceWith,
            goBack: this.goBack,
            makeHref: this.makeHref
        };


        return <Component ref="component" {...this.props} routerState={stateMixinApi} navigation={navigationMixinApi}/>;
    }
});

export default {shim: mixin};
