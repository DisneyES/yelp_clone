import React from 'react';
import { connect } from 'react-redux';
import { increaseCounter, decreaseCounter } from '../actions';
import style from './style.scss';

const Counter = (props) => (
    <div>
        <button
            className={style.btn}
            onClick={props.increaseCounter}
        >+</button>
        <span>{props.counter}</span>
        <button
            className={style.btn}
            onClick={props.decreaseCounter}
        >-</button>
    </div>
);

const mapStateToProps = (state) => (
    {
        counter: state.count
    }
);

export default connect(mapStateToProps, { increaseCounter, decreaseCounter })(Counter);
