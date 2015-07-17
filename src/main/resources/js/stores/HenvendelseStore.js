import AppDispatcher from './../AppDispatcher.js';
import Store from './Store.js';
import Constants from './../Constants.js';


let _henvendelser = [];

class HenvendelseStore extends Store {
    constructor() {
        super('change-event');
    }

    getAll() {
        return _henvendelser.slice(0);
    }
}

let _HenvendelseStore = new HenvendelseStore();


const ActionHandlers = {};

ActionHandlers[Constants.HENTING_FEILET] = (action) => {
    console.error('Henting av alle henvendelser feilet...');
};

AppDispatcher.register(function (action) {
    var callback = ActionHandlers[action.actionType];

    if (typeof callback === 'function') {
        callback(action)
    }
});

export default _HenvendelseStore;