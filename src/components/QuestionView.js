import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Question from './Question';
import QuestionResults from './QuestionResults';

class QuestionView extends Component {
    render() {
        const {authorUser, question, authUserAnswered, authedUser} = this.props;
        return (authUserAnswered ?
            <QuestionResults authorUser={authorUser} question={question} authedUser={authedUser}/> :
            <Question authorUser={authorUser} question={question} authedUser={authedUser}/>
        );
    }
}

const mapStateToProps = ({authedUser, questions, users}, ownProps) => {
    const {id} = ownProps.match.params;
    const question = questions[id];
    const authorUser = question ? users[question.author]: null;
    const authUserAnswered = authedUser && users[authedUser].answers ? Object.keys(users[authedUser].answers).includes(id) : false;
    return {
        question,
        authorUser,
        authUserAnswered,
        authedUser
    }
}

QuestionView.propTypes= {
    question: PropTypes.object,
    authorUser: PropTypes.object,
    authUserAnswered: PropTypes.bool,
    authedUser: PropTypes.string,
}

export default withRouter(connect(mapStateToProps)(QuestionView));