import AppDispatcher from './../AppDispatcher.js';
import Constants from './../Constants.js';
import Superagent from 'superagent';

let Actions = {
    upsertHenvendelse: (henvendelse) => {
        AppDispatcher.dispatch({
            actionType: Constants.UPSERT_HENVENDELSE,
            data: henvendelse
        });
    }
};

export default Actions;