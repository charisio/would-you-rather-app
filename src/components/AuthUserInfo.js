import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {NavLink, withRouter} from 'react-router-dom';
import {removeAuthedUser} from '../actions/authedUser';

class AuthUserInfo extends Component {
    handleLogout = () => this.props.dispatch(removeAuthedUser());

    render() {
        const {authedUser} = this.props;
        return (
            <span className='mx-5'>
            {authedUser && (
                <span className='mx-5'>
                    <span>Hello {authedUser.name}</span>
                    <span><img
                        src={authedUser.avatarURL}
                        className='avatar'
                        alt={`Avatar of ${authedUser.name}`}/></span>
                    <NavLink to='/login' onClick={this.handleLogout}>Logout</NavLink>
                </span>
            )}
            </span>
        );
    }
}

const mapStateToProps = ({authedUser, users}) => {
    return {
        authedUser: users[authedUser]
    }
}

AuthUserInfo.propTypes = {
    authedUser: PropTypes.object,
};

export default withRouter(connect(mapStateToProps)(AuthUserInfo));