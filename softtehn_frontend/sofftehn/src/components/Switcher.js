import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Template from './template/Template';
import BaseLayout from '../layouts/base';
import TemplateList from "./TemplateList";
import CreateDocument from "./CreateDocument";

const Switcher = () => {
    return (
        <BaseLayout>
            <Switch>
                <Route exact path="/template" component={Template} />
                <Route exact path="/templateList" component={TemplateList} />
                <Route exact path="/document/:templateName/new" comonent={CreateDocument} />
            </Switch>
        </BaseLayout>
    )
};

export default Switcher;