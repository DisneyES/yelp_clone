import React, { Component } from 'react'
import styles from './styles.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchBussines } from '../../actions/index';

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = { term:'' };
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.getCurrentLocation = this.getCurrentLocation.bind(this);

    }

    onInputChange(event) {
        this.setState({ term: event.target.value });
    }

    getCurrentLocation(){
            const options = {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
            };

            function success(pos) {
                const crd = pos.coords;
                console.log(pos);
                console.log('Your current position is:');
                console.log(`Latitude : ${crd.latitude}`);
                console.log(`Longitude: ${crd.longitude}`);
                console.log(`More or less ${crd.accuracy} meters.`);
                return crd;
            };

            function error(err) {
                console.warn(`ERROR(${err.code}): ${err.message}`);
            };

            navigator.geolocation.getCurrentPosition(success, error, options);
    }

    onFormSubmit(event) {
        event.preventDefault();
        const location = this.getCurrentLocation();
        this.props.fetchBussines(this.state.term, location);
        this.setState({ term:'' });
    }

    render () {
        return (
            <form onSubmit={this.onFormSubmit} className={`${styles.header} form-group`}>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <input
                                placeholder="Search term (e.g. food, restaurants). "
                                className="form-control"
                                value={this.state.term}
                                onChange={this.onInputChange}
                            />
                        </div>
                    </div>
                    <div className="col-md-12 text-center">
                        <button
                            type="submit"
                            className={`${styles.circleSubmit}`}
                        >
                            Find.
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators( { fetchBussines }, dispatch);
}

export default connect(null, mapDispatchToProps)(Search);
