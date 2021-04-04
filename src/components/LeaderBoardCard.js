import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import {Badge, Card} from 'react-bootstrap';
import {TrophyFill} from 'react-bootstrap-icons';

const LeaderBoardCard = ({user, place}) => {
    const answersLength = Object.keys(user.answers).length;
    const questionsLength = user.questions.length;
    const getTrophyColor = useCallback(() => {
        if (place < 2) {
            return 'goldenrod';
        }

        if (place < 3) {
            return 'silver';
        }

        return 'chocolate';
    }, [place]);

    return (
        <Card className='question-card standalone'>
            <div className='question-card-body'>
                {place <= 3 && <TrophyFill className='trophy-icon' color={getTrophyColor()}/>}
                <Card.Img className='question-avatar' variant='top' src={user.avatarURL}/>
                <Card.Body>
                    <h2 className='center'>{user.name}</h2>
                    <hr/>
                    <div className='results-section'>
                        <div className='results'>
                            <p>Answered questions <span className='question-number'>{answersLength}</span></p>
                            <hr/>
                            <p>Created questions <span className='question-number'>{questionsLength}</span></p>
                        </div>
                        <div className='score center'>
                            <p>Score</p>
                            <p><Badge className='total-score-badge' pill variant='info'>{answersLength + questionsLength}</Badge></p>
                        </div>
                    </div>
                </Card.Body>
            </div>
        </Card>
    );
}

LeaderBoardCard.propTypes = {
    place: PropTypes.number,
    user: PropTypes.object,
};

export default LeaderBoardCard;