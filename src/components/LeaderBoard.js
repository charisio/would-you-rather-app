import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import LeaderBoardCard from './LeaderBoardCard';

class LeaderBoard extends Component {
    render() {
        const {sortedLeadersIds, users} = this.props;
        return(
            <div>
            {sortedLeadersIds && sortedLeadersIds.map((userId, index) => (
               <LeaderBoardCard key={index} place={index+1} user={users[userId]}/>
            ))}
            </div>
        )
    }
}

const mapStateToProps = ({users}) => {
    const sortedLeadersIds = Object.keys(users).sort((a, b) => {
        return (Object.keys(users[b].answers).length + users[b].questions.length) - (Object.keys(users[a].answers).length + users[a].questions.length)
    });
    return {
        users,
        sortedLeadersIds
    }
}

LeaderBoard.propTypes = {
    users: PropTypes.object,
    sortedLeadersIds: PropTypes.arrayOf(PropTypes.string),
}

export default connect(mapStateToProps)(LeaderBoard);