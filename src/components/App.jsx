import React from 'react';
import Search from './SearchBussines';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import BussinesList from './BussinesList';
import SingleBussines from './SingleBussines'

const Home = () => (
    <div className="row">
        <div className="col-md-12">
            <h3 className="text-center">Find bussines near your location and get trends!</h3>
            <Search />
        </div>
    </div>
);

const App = () => (
    <Router>
        <div className="container">
            <Route path="/" component={Home} />
            <Route path="/search" component={BussinesList} />
            <Route path="/bussines" component={SingleBussines} />
        </div>
    </Router>
);

export default App;
