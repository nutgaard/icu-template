import AppDispatcher from './../AppDispatcher.js';
import Store from './Store.js';
import Constants from './../Constants.js';

let _kanaler = [];

class KanalStore extends Store {
    constructor() {
        super('change-event-kanal');
    }

    hentAlle() {
        return _kanaler.slice(0);
    }
}

let _KanalStore = new KanalStore();


const ActionHandlers = {};

ActionHandlers[Constants.HENT_KANALER_OK] = (action) => {
    _kanaler = action.data.sort();
};

ActionHandlers[Constants.HENT_KANALER_FEIL] = (action) => {
    console.error('Kunne ikke hente ut kanaler', action);
};

_KanalStore.dispatchToken = AppDispatcher.register(function (action) {
    var callback = ActionHandlers[action.actionType];

    if (typeof callback === 'function') {
        callback(action);
        _KanalStore.emitChange();
    }
});

export default _KanalStore;