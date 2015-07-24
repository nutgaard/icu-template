var React = require('react/addons');

var mixin = Component => React.createClass({
    mixins: [React.addons.LinkedStateMixin],

    render() {
        return <Component ref="component" {...this.props} linkState={this.linkState} />;
    }
});

export default {shim: mixin};
