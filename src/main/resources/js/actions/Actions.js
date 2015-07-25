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
    nyMal: (malnavn, dialog) => {
        if (!malnavn || malnavn.length == 0) {
            dispatch(Constants.LAG_NY_FEIL, 'Dette felted må være fylt ut.');
            return;
        }
        http
            .post('/rest/mal')
            .send({navn: malnavn})
            .end((err, resp) => {
                if (err) dispatch(Constants.LAG_NY_FEIL, 'Det skjedde en feil ved lagring av malen.');
                else {
                    dispatch(Constants.LAG_NY_OK, resp.body);
                    dialog.dismiss();
                }
            });
    },
    velgMal: (mal) => {
        dispatch(Constants.VELG_MAL, mal);
    },
    leggTilKanal: (mal, kanal) => {
        mal.maler.push({
            kanal: kanal,
            mal: "Din melding her..."
        });
        dispatch(Constants.LEGG_TIL_KANAL_OK, mal);
    },
    slettKanal: (mal, kanal) => {
        mal.maler = mal.maler.filter((kanalmal) => {
            return kanalmal.kanal !== kanal;
        });
        dispatch(Constants.SLETT_KANAL_OK, mal);
    },
    lagreMal: (mal) => {
        http
            .put('/rest/mal/' + mal.id)
            .send(mal)
            .end((err, resp) => {
                if (err) {
                    dispatch(Constants.LAGRE_MAL_FEIL, resp.body);
                } else {
                    dispatch(Constants.LAGRE_MAL_OK, resp.body);
                }
            });
    }
};

export default Actions;