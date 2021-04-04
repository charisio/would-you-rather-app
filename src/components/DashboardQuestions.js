import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Tab, Tabs} from 'react-bootstrap';
import DashboardQuestion from './DashboardQuestion';

class DashboardQuestions extends Component {
    render() {
        const {answeredQuestionsIds, unAnsweredQuestionIds} = this.props;
        return(
          <div className='dashboard'>
              <Tabs defaultActiveKey='unanswered'>
                  <Tab eventKey='unanswered' title='Unanswered Questions'>
                      {unAnsweredQuestionIds && unAnsweredQuestionIds.length ? unAnsweredQuestionIds.map(qid => (
                          <DashboardQuestion key={qid} id={qid}/>
                      )): (
                          <div className='mx-4 my-4'>
                              <p>No more questions to answer.</p>
                              <Link to='/add'>Add Question?</Link>
                          </div>
                      )}
                  </Tab>
                  <Tab eventKey='answered' title='Answered Questions'>
                      {answeredQuestionsIds && answeredQuestionsIds.length ? answeredQuestionsIds.map(qid => (
                          <DashboardQuestion key={qid} id={qid}/>
                      )) : (
                          <p className='mx-4 my-4'>No answered questions yet!</p>
                      )}
                  </Tab>
              </Tabs>
          </div>
        );
    }
}

const mapStateToProps = ({authedUser, users, questions}) => {
    const userAnswerIds = Object.keys(users[authedUser].answers);
    return {
        answeredQuestionsIds: Object.keys(questions).filter(id => userAnswerIds.includes(id)).sort((a, b) => questions[b].timestamp - questions[a].timestamp),
        unAnsweredQuestionIds: Object.keys(questions).filter(id => !userAnswerIds.includes(id)).sort((a, b) => questions[b].timestamp - questions[a].timestamp),
    }
}

DashboardQuestions.propTypes = {
    answeredQuestionsIds: PropTypes.arrayOf(PropTypes.string),
    unAnsweredQuestionIds: PropTypes.arrayOf(PropTypes.string),
};

export default connect(mapStateToProps)(DashboardQuestions);