import React, {Component} from 'react';
import {Grid} from 'react-bootstrap';

import VoteField from './VoteField'

class Container extends Component {
    render() {
        return (
            <Grid>
                <div className="well">
                    <h3 className="text-center">Upvote vs downvote</h3>
                    <div>
                        <VoteField/>
                    </div>
                </div>
            </Grid>
        );
    }
}

export default Container;
