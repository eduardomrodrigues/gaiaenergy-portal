import * as React from 'react';

import PageInterface from './PageInterface';

class App extends React.Component<PageInterface, {}> {
  render() {
    return (
      <h2 className="sub-titulo-padrao grid12">Welcome to the <span id="fitme-word">Fitme </span>program! 
      <br /> Tell me your history</h2>
    );
  }
}

export default App;