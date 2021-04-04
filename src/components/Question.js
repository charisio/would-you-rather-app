import React , {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Button, Card} from 'react-bootstrap';
import {handleSaveQuestionAnswer} from '../actions/questions';

class Question extends Component {
    state = {
        selectedOption: 'optionOne',
    }

    handleInputChecked = e => {
        this.setState({selectedOption: e.target.value});
    }

    submitQuestion = (e, qid) => {
        e.preventDefault();
        const {selectedOption} = this.state;
        const {dispatch, authedUser} = this.props;
        dispatch(handleSaveQuestionAnswer({
            authedUser,
            qid,
            answer: selectedOption
        }));
    }

    render() {
        const {authorUser, question} = this.props;
        const {selectedOption} = this.state;
        return (
            <Card className='question-card standalone'>
                <Card.Header>{authorUser.name} asks:</Card.Header>
                <div className='question-card-body'>
                    <Card.Img className='question-avatar' variant='top' src={authorUser.avatarURL}/>
                    <Card.Body>
                        <Card.Title>Would you rather...</Card.Title>
                        <div>
                            <input
                                type='radio'
                                name='question-option'
                                id='qOne'
                                value='optionOne'
                                className='question-option'
                                checked={selectedOption === 'optionOne'}
                                onChange={this.handleInputChecked}
                            />
                            <label htmlFor='qOne'>{question.optionOne.text}</label>
                        </div>
                        <div>
                            <input
                                type='radio'
                                name='question-option'
                                id='qTwo'
                                className='question-option'
                                value='optionTwo'
                                checked={selectedOption === 'optionTwo'}
                                onChange={this.handleInputChecked}
                            />
                            <label htmlFor='qTwo'>{question.optionTwo.text}</label>
                        </div>
                        <Button className='btn-small' variant='primary'
                                onClick={e => this.submitQuestion(e, question.id)}>Submit</Button>
                    </Card.Body>
                </div>
            </Card>
        )
    }
}

Question.propTypes = {
    authorUser: PropTypes.object,
    question: PropTypes.object,
    authedUser: PropTypes.string,
};

export default connect()(Question);