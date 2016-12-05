import React, {Component} from 'react';
import {Grid} from 'react-bootstrap';

import VoteFieldContainer from './VoteFieldContainer'

class Container extends Component {


    render() {
        return (
            <Grid>
                <div className="well">
                    <h3 className="text-center">Upvote vs downvote</h3>
                    <div>
                        <VoteFieldContainer />
                    </div>
                </div>
            </Grid>
        );
    }
}

export default Container;
