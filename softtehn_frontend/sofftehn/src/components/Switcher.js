import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Template from './template/Template';
import BaseLayout from '../layouts/base';
import TemplateList from "./template/TemplateList";
import CreateDocument from "./CreateDocument/CreateDocument";
import DocumentList from "./DocumentList";
import DocumentViewFile from './documentViewFile'
import TemplateSingleList from "./template/TemplateSingleList";

const Switcher = () => {
    return (
        <BaseLayout>
            <Switch>
                <Route exact path="/template" component={Template} />
                <Route path="/template/:templateName" component={TemplateSingleList} />
                <Route exact path="/templateList" component={TemplateList} />
                <Route path="/document/:templateName/new" component={CreateDocument} />
                <Route path="/document/:templateName/list" component={DocumentList} />
                <Route path="/document/:documentId/file" component={DocumentViewFile} />
            </Switch>
        </BaseLayout>
    )
};

export default Switcher;