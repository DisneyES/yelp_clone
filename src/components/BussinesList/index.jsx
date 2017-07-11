import React, { Component } from 'react';
import { Route, Link} from 'react-router-dom';

class BussinesList extends Component {
    render () {
        return (
        <ul className="list-group">
            <li className="list-group-item row">
                <div className="col-md-4">
                    <img className="img-responsive" />
                </div>
                <div className="col-md-8">
                    <h2>Property</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum autem nemo nobis ea. Recusandae saepe temporibus eveniet, harum culpa minima, hic dolor! Inventore temporibus assumenda quae ad quod quisquam ea!</p>
                    <button className="btn btn-info">READ MORE</button>
                </div>
            </li>
        </ul>
        )
    }
}

export default BussinesList