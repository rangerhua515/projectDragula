import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import FullLayout from './Containers/FullLayout';
import App from './Containers/App';

const Routes = () => (
    <Router>
        <FullLayout>
            <Route exact path="/" component={App}/>

        </FullLayout>
    </Router>
);

export default Routes;