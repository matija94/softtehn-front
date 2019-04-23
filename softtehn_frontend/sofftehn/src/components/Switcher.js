import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Template from './template/Template';
import BaseLayout from '../layouts/base';
const Switcher = () => {
    return (
        <BaseLayout>
            <Switch>
                <Route exact path="/template" component={Template} />
            </Switch>
        </BaseLayout>
    )
};

export default Switcher;