
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SiteContextProvider from './context/site.jsx'
import ToDo from './components/connected-todo.jsx';

export default class App extends React.Component {
  render() {
    return (
      <SiteContextProvider>
        <div>
          <ToDo />
        </div>
      </SiteContextProvider>
    );
  }
}
