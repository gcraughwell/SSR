import React from 'react';
import Home from './components/Home';
import UsersList, {loadData} from './components/UsersList';

//routes are in a array
export default [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    loadData,
    path: '/users',
    component: UsersList
  }
];
