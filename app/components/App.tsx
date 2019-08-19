import * as React from 'react';

import PageInterface from './PageInterface';
import Welcome from './Welcome';
import UserForm from './UserForm';

class App extends React.Component<PageInterface, {}> {
  render() {
    return (
      <div className="wrapper-grid">
        <Welcome />
        <UserForm />
      </div>
    );
  }
}

export default App;