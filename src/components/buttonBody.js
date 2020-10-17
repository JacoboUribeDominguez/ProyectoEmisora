import React from 'react';
import { Button } from 'react-bootstrap';

export default class ButtonBody extends React.Component {
    render() {

        const onClick = this.props.onClick;

        return (
            <div className="d-flex flex-column align-items-center">
                <img src={this.props.imagen} style={{ width: '100px', height: 'auto' }} alt="_" />
                <Button className="mb-2" onClick={onClick} style={{ border: '1px solid white', background: '#a0a0a0', color: 'white', width: '60%' }}>
                    <strong>
                        {this.props.letra}
                    </strong>
                </Button>
            </div>
        );
    }
}