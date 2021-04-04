import React from 'react';
import PropTypes from 'prop-types';
import {Badge, Card, ProgressBar} from 'react-bootstrap';
import {constructQuestion, calculatePercentage} from '../utils/helpers';

const Result = ({firstOption, secondOption, authedUser}) => {
    const optionVotePercentage = calculatePercentage(firstOption, secondOption);
    const totalVotes = firstOption.votes.length + secondOption.votes.length;

    return (
        <Card className='question-card votes'>
            {firstOption.votes.includes(authedUser) && <Badge className='vote-badge' pill variant='info'>Your vote!</Badge>}
            <p>{constructQuestion(firstOption.text)}</p>
            <ProgressBar now={optionVotePercentage} label={`${optionVotePercentage}%`}/>
            <p className='no-margins center'>{firstOption.votes.length} out of {totalVotes} votes</p>
        </Card>
    );
}

Result.propTypes = {
    firstOption: PropTypes.object,
    secondOption: PropTypes.object,
    authedUser: PropTypes.string,
};

export default Result;