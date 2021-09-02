import { useMemo } from "react";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

let store;

const initialState = {
    navIsOpen: false
};

const reducer = (state = initialState.session, { type, payload }) => {
    switch (type) {
        case 'OPEN_NAV':
            return {
                ...state,
                navIsOpen: true
            }
        case 'CLOSE_NAV':
            return {
                ...state,
                navIsOpen: false
            }
        default:
            return state
    }
}

function initStore(preloadedState = initialState) {
    return createStore(
        reducer,
        preloadedState,
        composeWithDevTools(applyMiddleware())
    );
}

export const initializeStore = (preloadedState) => {
    let _store = store ?? initStore(preloadedState);

    if (preloadedState && store) {
        _store = initStore({
            ...store.getState(),
            ...preloadedState,
        });
        store = undefined;
    }

    if (typeof window === "undefined") return _store;
    if (!store) store = _store;

    return _store;
};

export function useStore(initialState) {
    const store = useMemo(() => initializeStore(initialState), [initialState]);
    return store;
}
