import React from 'react';
import Aux from 'react-aux';
import Routes from './Routes';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Aux>
      <div className="App">
        <Routes />
      </div>
    </Aux>
  );
}
export default App;
