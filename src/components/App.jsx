import React from 'react';
import Counter from '../containers/counter';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

const App = () => (
    <Router>
        <div>
            <h2>This is simple kit to start with react & redux app</h2>
            <Link to="/counter">Go to counter example</Link>
            <Route path="/counter" component={Counter}/>
        </div>
    </Router>
);

export default App;
