import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import FullLayout from './Containers/FullLayout';
import App from './Containers/App';
import Profile from './Containers/Profile';

const Routes = () => (
    <Router>
        <FullLayout>
            <Route exact path="/" component={App}/>
            <Route path="/profile" component={Profile}/>

        </FullLayout>
    </Router>
);

export default Routes;