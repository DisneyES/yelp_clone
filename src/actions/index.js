import axios from 'axios';
import {
    GET_BUSSINES
} from '../constants/ActionsType.js';

const API_KEY = '9c60fcf251e4b24a70e886b21f05ab5b';
const ROOT_URL = `https://api.yelp.com/v3/businesses/search?location=Wrocław`;

export function fetchBussines(term, location) {
    
    const request = axios({
        method:'get',
        url: ROOT_URL,
        headers: {'Authorization': 'XNC76F5B5lPZ9Zh6XM4PMJ50aVnGNHgdrB5rbzHtNnjLnNU42VnqaGU2EDlyzoF0K05u1_M5QBuUJ3eTwCfgJO1DB1xhnBaI-GepJ9kfAZUzbAIE723rTtJetmlTWXYx'},
    });


    console.log(request);
    
    return {
        type: GET_BUSSINES,
    };
    
}

export function decreaseCounter() {
    return {
        type: DECREASE_COUNTER,
    };
}
