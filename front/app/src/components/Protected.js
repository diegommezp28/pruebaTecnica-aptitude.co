import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const Protected = ({ component: Component, state, ...rest }) => (
    <Route
        {...rest}
        render={props => {
            if (state.isLoading) {
                return <h3>Cargando...</h3>
            }
            else if (!state.token || state.token === "undefined" || state.token === "null") {
                console.log(state);
                return <Redirect to="/login" />
            }
            else {
                return <Component {...props}></Component>
            }
        }}
    />
);

export default Protected;