import React from 'react';
import { Route, Switch } from 'react-router-dom';

import {
    AboutUs, ContactUs, Resources, Landing, Database, Analysis, Tutorial
} from './routes';

const PATH = process.env.REACT_APP_LINK_TO_PATH;

const AppRoutes = () => {
    return (
        <Switch>
            <Route exact path={`${PATH}`} component={Landing} />
            <Route exact path={`${PATH}about`} component={AboutUs} />
            <Route exact path={`${PATH}contactus`} component={ContactUs} />
            <Route exact path={`${PATH}resources`} component={Resources} />
            <Route exact path={`${PATH}database/`} component={Database} />
            <Route exact path={`${PATH}analysis`} component={Analysis} />
            <Route exact path={`${PATH}tutorial`} component={Tutorial} />
        </Switch>
    );
};

export default AppRoutes;