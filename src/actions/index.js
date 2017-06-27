import {
    INCREASE_COUNTER,
    DECREASE_COUNTER
} from '../constants/ActionsType.js';

export function increaseCounter() {
    return {
        type: INCREASE_COUNTER,
    };
}

export function decreaseCounter() {
    return {
        type: DECREASE_COUNTER,
    };
}
