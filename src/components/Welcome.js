import React, {Component, PropTypes} from 'react';
import {Row, Col} from 'react-bootstrap';
import CreateVote from './CreateVote';

var component;

class Welcome extends Component {
    constructor(props) {
        super(props);
        component = this;
    }

    render() {
        return (
            <div>
                <Row>
                    <Col className="well" sm={5}>
                        <CreateVote/>
                    </Col>
                    <Col sm={1}>
                    </Col>
                    <Col sm={5} className="well text-right">
                        då
                    </Col>
                </Row>
            </div>

        );
    }

}

export default Welcome;
