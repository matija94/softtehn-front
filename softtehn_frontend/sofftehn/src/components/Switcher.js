import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Template from './template/Template';
import BaseLayout from '../layouts/base';
import TemplateList from "./TemplateList";
import CreateDocument from "./CreateDocument/CreateDocument";
import DocumentList from "./DocumentList";

const Switcher = () => {
    return (
        <BaseLayout>
            <Switch>
                <Route exact path="/template" component={Template} />
                <Route exact path="/templateList" component={TemplateList} />
                <Route path="/document/:templateName/new" component={CreateDocument} />
                <Route path="/document/:templateName/list" component={DocumentList} />
            </Switch>
        </BaseLayout>
    )
};

export default Switcher;