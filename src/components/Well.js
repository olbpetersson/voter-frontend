import React, {Component} from 'react';
import {} from 'react-bootstrap';

import VoteField from './VoteField';

class Well extends Component {
    render() {
        return (
            <div className="well">
                <h3 className="text-center">Upvote vs downvote</h3>
                <div>
                    <VoteField/>
                </div>
            </div>
        );
    }
}

export default Well;
