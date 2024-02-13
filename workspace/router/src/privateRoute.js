import React from 'react';
import {Navigate, useLocation} from 'react-router-dom';

const PrivateRoute = (props) => {
    const authorized = props.authorized;
    const location = useLocation();
    console.log('In PrivateRoute', props);
    console.log('In PrivateRoute', location);
    console.log('In PrivateRoute Auth', authorized)
    return authorized ? (
        props.children
    ) : (
        <Navigate to='/login' state={{from: location}}/>
    );
};

export default PrivateRoute;