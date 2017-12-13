import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ReactTable from 'react-table';
import 'react-table/react-table.css'
import Button from 'elmer/lib/Button'
import GridView from 'elmer/lib/GridView'
import { BrowserRouter, Route } from 'react-router-dom';

const MultiFieldColumnHeader = require('elmer/lib/GridView/MultiFieldColumnHeader').default;
const data = require('elmer/lib/GridView/sample.json');

const columns = [{
    key: 'firstName',
    header: 'First Name',
    subquery: true,
}, {
    key: 'lastName',
    header: 'Last Name',
    subquery: true,
}, {
    key: 'age',
    header: 'Age',
    subquery: 'summary',
}, {
    key: 'company',
    header: <MultiFieldColumnHeader leftTitle="Company" rightTitle="City" sortByLeft />,
    render: (company, { city }) => (
        <div>
            <span>{company}</span>
            <span className="float-right">{city}</span>
        </div>
    ),
}];

const AppContainer = () => (
  <GridView data={data} rowKey="index" columns={columns} subqueries={{}} />
);



ReactDOM.render(
    <BrowserRouter basename="/"><Route component={AppContainer} /></BrowserRouter>,
    document.getElementById('root')
  );
