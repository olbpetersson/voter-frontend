import React, {Component, PropTypes} from 'react';
import NewVotingCommand from './dto/NewVotingCommand'
import {Row, Col, FormControl, FormGroup, ControlLabel, HelpBlock, Button} from 'react-bootstrap';
import { browserHistory } from 'react-router';

var component;

class CreateVote extends Component {
    constructor(props) {
        super(props);
        component = this;
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleOptionAChange = this.handleOptionAChange.bind(this);
        this.handleOptionBChange = this.handleOptionBChange.bind(this);
        this.handleCloseAfterChange = this.handleCloseAfterChange.bind(this);

        this.state = {name: '', description: '', optionA: '', optionB: '', closeAfter: ''};
    }

    handleNameChange(e) {
        this.setState({ name: e.target.value });
    }

    handleDescriptionChange(e) {
        this.setState({ description: e.target.value });
    }

    handleOptionAChange(e) {
        this.setState({ optionA: e.target.value });
    }

    handleOptionBChange(e) {
        this.setState({ optionB: e.target.value });
    }

    handleCloseAfterChange(e) {
        this.setState({ closeAfter: e.target.value });
    }

    submit(){
        var newVotingDto = new NewVotingCommand(this.state.name, this.state.description, this.state.optionA,
            this.state.optionB, this.state.closeAfter, "test");
        console.log("fetching with ", newVotingDto);
        fetch("http://localhost:9000/voting/" + this.state.name, {
                method: "POST",
                body: JSON.stringify(newVotingDto),
                mode: 'no-cors'
            }
        ).then(function(response){
            console.log("Got a response", response);
            browserHistory.push('/' + component.state.name);
        }).catch(function(error){
            console.log("there was an error", error);
        });
    }


    render() {
        return (
            <form>
                <FormGroup
                    controlId="formBasicText"
                >
                    <ControlLabel>Create vote</ControlLabel>
                    <FormControl
                        type="text"
                        value={this.state.name}
                        placeholder="Name"
                        onChange={this.handleNameChange}
                    />
                    <FormControl.Feedback />
                    <HelpBlock>This will be part of your url</HelpBlock>
                    <FormControl
                        type="text"
                        value={this.state.description}
                        placeholder="Description"
                        onChange={this.handleDescriptionChange}
                    />
                    <FormControl.Feedback />
                    <HelpBlock>Describe what you want the votees to decide</HelpBlock>
                    <FormControl
                        type="text"
                        value={this.state.optionA}
                        placeholder="First option"
                        onChange={this.handleOptionAChange}
                    />
                    <FormControl.Feedback />
                    <FormControl
                        type="text"
                        value={this.state.optionB}
                        placeholder="Second option"
                        onChange={this.handleOptionBChange}
                    />
                    <FormControl.Feedback />
                    <FormControl
                        type="text"
                        value={this.state.closeAfter}
                        placeholder="Close after"
                        onChange={this.handleCloseAfterChange}
                    />
                    <FormControl.Feedback />
                    <HelpBlock>The votation closes after this amount of votes</HelpBlock>
                </FormGroup>
                <Button
                    onClick={() => this.submit()}
                    bsStyle="success">
                    Create
                </Button>
            </form>

        );
    }
}

export default CreateVote;