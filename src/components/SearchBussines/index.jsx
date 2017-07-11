import React, { Component } from 'react'
import styles from './styles.scss';

class Search extends Component {
    render () {
        return (
            <form className={styles.header}>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <input className="form-control" placeholder="Search term (e.g. food, restaurants). "/>
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

export default Search