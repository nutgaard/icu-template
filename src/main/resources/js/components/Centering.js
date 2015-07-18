import React from 'react';

class Centering extends React.Component {
    render() {
        return (
            <div className="centering">{this.props.children}</div>
        );
    }
}

export default Centering;