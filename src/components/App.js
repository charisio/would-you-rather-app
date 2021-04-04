import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LoadingBarContainer from 'react-redux-loading';
import ProtectedRouteHOC from '../routeUtils/ProtectedRouteHOC';
import {getInitialStateData} from '../actions/shared';
import NavBar from './NavBar';
import LoginPage from './LoginPage';
import DashboardQuestions from './DashboardQuestions';
import QuestionView from './QuestionView';
import AddQuestion from './AddQuestion';
import LeaderBoard from './LeaderBoard';
import NotFound from './NotFound';
import '../App.css';

class App extends Component {
    componentDidMount() {
        this.props.dispatch(getInitialStateData());
    }

    render() {
        const {authedUser} = this.props;
        return (
            <BrowserRouter>
                <div className='container'>
                    <LoadingBarContainer/>
                    <NavBar />
                   <Switch>
                       <ProtectedRouteHOC path='/' exact loggedIn={authedUser} component={DashboardQuestions}/>
                       <ProtectedRouteHOC path='/question/:id' loggedIn={authedUser} component={QuestionView}/>
                       <ProtectedRouteHOC path='/add' loggedIn={authedUser} component={AddQuestion}/>
                       <ProtectedRouteHOC path='/leaderboard' loggedIn={authedUser} component={LeaderBoard}/>
                       <Route path='/login' component={LoginPage}/>
                       <Route component={NotFound} />
                   </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = ({authedUser}) => ({authedUser});

export default connect(mapStateToProps)(App);
