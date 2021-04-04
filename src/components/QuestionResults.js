import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {Card} from 'react-bootstrap';
import Result from './Result';

const QuestionResults = ({authorUser, authedUser, question: {optionOne, optionTwo}}) => (
    <div className='question-card-result'>
        <Card>
            <Card.Header>Asked by {authorUser.name}:</Card.Header>
            <div className='question-card-body'>
                <Card.Img className='question-avatar' variant='top' src={authorUser.avatarURL}/>
                <Card.Body>
                    <Card.Title>Results:</Card.Title>
                    <Result firstOption={optionOne} secondOption={optionTwo} authedUser={authedUser}/>
                    <Result firstOption={optionTwo} secondOption={optionOne} authedUser={authedUser}/>
                </Card.Body>
            </div>
        </Card>
        <p className='my-4'>
            <Link to='/'> &lt; Back to Questions</Link>
        </p>
    </div>
);

QuestionResults.propTypes = {
    authorUser: PropTypes.object,
    question: PropTypes.object,
    authedUser: PropTypes.string,
};

export default QuestionResults;