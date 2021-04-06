import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const ProtectedRouteHOC = ({ component: Comp, loggedIn, path, ...rest }) => {
    return (
        <Route
            path={path}
            {...rest}
            render={(props) => {
                return loggedIn
                    ? <Comp {...props} />
                    : <Redirect to={{
                        pathname: '/login',
                        state:{from: props.location.pathname},
                    }} />;
            }}
        />
    );
};

export default ProtectedRouteHOC;