import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = (): JSX.Element => {
  return <h1>app</h1>;
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
