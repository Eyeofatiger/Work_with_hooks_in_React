import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import HookSwitcher from './components/HookSwitcher';
import Notification from './components/notification';
import ViewPlanet from './components/viewPlanet';

const App = ()=> {
    return(
        <div>
            <HookSwitcher />
            <Notification />
            <ViewPlanet id="3" />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.register();