
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import ToDo from './components/connected-todo.jsx';

export default class App extends React.Component {
  render() {
    return (
      <>
        <ToDo />
      </>
    );
  }
}
