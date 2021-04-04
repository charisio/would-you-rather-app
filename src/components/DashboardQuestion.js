import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Card, Button} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';

class DashboardQuestion extends Component {
    navigateToPollDetails = (e, id) => {
        e.preventDefault();
        this.props.history.push(`/question/${id}`);
    }

    constructQuestion = question => {
        if (question && question.optionOne) {
            return `...${question.optionOne.text.slice(0, 20)}...`;
        }
    }

    render() {
        const {question, authorUser} = this.props;
        return (
            <Card className='question-card'>
                <Card.Header>{authorUser.name} asks:</Card.Header>
                <div className='question-card-body'>
                    <Card.Img className='question-avatar' variant='top' src={authorUser.avatarURL}/>
                    <Card.Body>
                        <Card.Title>Would you rather</Card.Title>
                        <Card.Text>{this.constructQuestion(question)}</Card.Text>
                        <Button className='btn-small' variant='primary' onClick={e => this.navigateToPollDetails(e, question.id)}>View poll</Button>
                    </Card.Body>
                </div>
            </Card>
        );
    }
}

const mapStateToProps = ({questions, users}, {id}) => {
    const question = questions[id];
    const authorUser = question ? users[question.author]: null;
    return {
        question,
        authorUser,
    }
}

DashboardQuestion.propTypes = {
  id: PropTypes.string,
  question: PropTypes.object,
  authorUser: PropTypes.object,
};

export default withRouter(connect(mapStateToProps)(DashboardQuestion));