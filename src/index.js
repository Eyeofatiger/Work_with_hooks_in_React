import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

const App = ()=> {
    return <h1>Hi</h1>
}


ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.register();