import React, {Component} from 'react';
import {connect} from 'react-redux';
import {handleAddQuestion} from '../actions/questions';
import {Redirect} from 'react-router-dom';
import {Button, Card} from 'react-bootstrap';

class AddQuestion extends Component {
    state = {
        optionOneText: '',
        optionTwoText: '',
        navigateToHome: false,
    };

    handleChange = (e) => {
        const option = e.target.name;
        const value = e.target.value;

        this.setState({[`${option}Text`]: value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {optionOneText, optionTwoText} = this.state;
        const {dispatch} = this.props;
        dispatch(handleAddQuestion(optionOneText, optionTwoText));

        this.setState(() => ({
            text: '',
            navigateToHome: true,
        }));
    }

    render() {
        const {optionOneText, optionTwoText, navigateToHome} = this.state;

        if (navigateToHome) {
            return <Redirect to='/'/>
        }

        return(
            <Card className='new-question-card'>
                <Card.Header className='center'>Create New Poll</Card.Header>
                <div className='question-card-body'>
                    <Card.Body>
                        <Card.Title>Would you rather...</Card.Title>
                        <form className='new-tweet' onSubmit={this.handleSubmit}>
                            <div>
                                <input
                                    type='text'
                                    placeholder='Enter option One text here'
                                    value={optionOneText}
                                    name='optionOne'
                                    className='new-question-option'
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className='row'>
                                <div className='col'><hr/></div>
                                <div className='col-auto'>OR</div>
                                <div className='col'><hr/></div>
                            </div>
                            <div>
                                <input
                                    type='text'
                                    placeholder='Enter option Two text here'
                                    value={optionTwoText}
                                    name='optionTwo'
                                    className='new-question-option'
                                    onChange={this.handleChange}
                                />
                            </div>
                            <Button type='submit' disabled={optionOneText === '' || optionTwoText === ''} className='btn-small full-width'>
                                Submit
                            </Button>
                        </form>
                    </Card.Body>
                </div>
            </Card>
        );
    }
}

export default connect()(AddQuestion);