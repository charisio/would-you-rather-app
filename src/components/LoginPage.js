import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {setAuthedUser} from '../actions/authedUser';

class LoginPage extends Component {
    state = {
        value: '',
        disabled: true,
    }

    handleUserChange = e => {
        this.setState({value: e.target.value, disabled: e.target.value === ""});
    }

    handleSubmit = e => {
        e.preventDefault();
        const {dispatch, history, location} = this.props;
        const {value} = this.state;
        if (value) {
            dispatch(setAuthedUser(value));
            history.push((location.state && location.state.from) || '/');
        }
    }

    render() {
        const {users} =  this.props;
        const {value, disabled} = this.state;
        return (
          <div className='login'>
              <div className='login-header center'>
                  <h3> Welcome to the 'Would you rather' app!</h3>
                  <span>Please sign in to continue</span>
              </div>
              <div className='login-details center'>
                  <img alt='login' src='logo192.png'/>
                  <h3 className='center'>Sign In</h3>
                  <form onSubmit={this.handleSubmit}>
                      <select value={value} className='dropdown' onChange={this.handleUserChange}>
                          <option value='' disabled>Select user</option>
                          {Object.values(users).map(user => (
                            <option key={user.id} value={user.id}>{user.name}</option>
                          ))}
                      </select>
                      <input disabled={disabled} className='btn' type='submit' value='Sign In'/>
                  </form>
              </div>
          </div>
        );
    }
}

const mapStateToProps = ({users}) => ({users});

LoginPage.propTypes = {
    users: PropTypes.object,
};

export default withRouter(connect(mapStateToProps)(LoginPage));