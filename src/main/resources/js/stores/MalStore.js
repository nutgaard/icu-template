import AppDispatcher from './../AppDispatcher.js';
import Store from './Store.js';
import Constants from './../Constants.js';

let _maler = [];
let _valgtMal = null;

class MalStore extends Store {
    constructor() {
        super('change-event');
    }

    hentAlle() {
        return _maler.slice(0);
    }

    valgtMal() {
        return _valgtMal;
    }
}

let _MalStore = new MalStore();


const ActionHandlers = {};

ActionHandlers[Constants.HENT_ALLE_OK] = (action) => {
    _maler = action.data.sort((a, b) => {
        return b.opprettet - a.opprettet;
    });
    if (_maler.length > 0) {
        _valgtMal = _maler[0];
    }
};

ActionHandlers[Constants.LAG_NY_OK] = (action) => {
    _maler = [action.data].concat(_maler);
    _valgtMal = _maler[0];
};

ActionHandlers[Constants.VELG_MAL] = (action) => {
    _valgtMal = action.data;
};

ActionHandlers[Constants.LEGG_TIL_KANAL_OK] = (action) => {
    let nyMal = action.data;
    let eksisterendeMal = _maler.filter((mal) => {
        return mal.id = nyMal.id;
    });

    if (eksisterendeMal) {
        eksisterendeMal.maler = nyMal.maler;
    } else {
        _maler.push(mal);
    }
};

ActionHandlers[Constants.SLETT_KANAL_OK] = (action) => {
    let nyMal = action.data;
    let eksisterendeMal = _maler.filter((mal) => {
        return mal.id = nyMal.id;
    });

    if (eksisterendeMal) {
        eksisterendeMal.maler = nyMal.maler;
    } else {
        _maler.push(mal);
    }

};

AppDispatcher.register(function (action) {
    var callback = ActionHandlers[action.actionType];

    if (typeof callback === 'function') {
        callback(action);
        _MalStore.emitChange();
    }
});

export default _MalStore;