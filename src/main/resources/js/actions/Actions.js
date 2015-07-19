import AppDispatcher from './../AppDispatcher.js';
import Constants from './../Constants.js';
import http from 'superagent';

function dispatch(type, data) {
    AppDispatcher.dispatch({
        actionType: type,
        data: data
    });
}

let Actions = {
    hentAlle: () => {
        http
            .get('/rest/mal')
            .end((err, resp) => {
                if (err) {
                    dispatch(Constants.HENT_ALLE_FEIL, resp.body);
                } else {
                    dispatch(Constants.HENT_ALLE_OK, resp.body);
                }
            });
    },
    nyMal: (mal) => {
        dispatch(Constants.LAG_NY_OK, mal);
    },
    velgMal: (mal) => {
        dispatch(Constants.VELG_MAL, mal);
    }
};

export default Actions;