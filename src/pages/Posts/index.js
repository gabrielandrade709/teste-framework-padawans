import React from 'react';
import { Admin, Resource, ListGuesser, Title} from 'react-admin';
import { Book, Album, ListAlt } from '@material-ui/icons';
import { createMuiTheme } from '@material-ui/core/styles';
import jsonServerProvider from 'ra-data-json-server';

import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import inicio from '../Home/index';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const theme = createMuiTheme({
  palette: {
    type: 'dark', // Switching the dark mode on is a single property value change.
  },
});

const Posts = () => (
  <Admin theme={theme} loginPage={inicio} dataProvider={dataProvider}>
    <Title title=" Framework " />
    <Resource name="posts" options={{ label: 'Postagens' }} list={ListGuesser} icon={Book} />
    <Resource name="albums" options={{ label: 'Albuns' }} list={ListGuesser} icon={Album} />
    <Resource name="todos" options={{ label: 'To-do' }} list={ListGuesser} icon={ListAlt} />
  </Admin>
);

export default Posts;