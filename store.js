import { useMemo } from "react";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

let store;

const initialState = {
    navIsOpen: false,
    cart: [],
    wishlist: [],
};

const reducer = (state = initialState.session, { type, payload }) => {
    switch (type) {
        /*********
        Session
        ********/
        case "OPEN_NAV":
            return {
                ...state,
                navIsOpen: true,
            };
        case "CLOSE_NAV":
            return {
                ...state,
                navIsOpen: false,
            };

        /*********
        Wishlist
        ********/
        case "WISHLIST_ADD":
            return {
                ...state,
                wishlist: [...state.wishlist, payload.id],
            };

        case "WISHLIST_REMOVE":
            if (!state.wishlist.includes(payload.id)) return state;

            state.wishlist.splice(state.wishlist.indexOf(payload.id), 1);

            return {
                ...state,
            };

        case "WISHLIST_RESET":
            return {
                ...state,
                wishlist: payload.wishlist,
            };

        /*********
        Cart
        ********/
        case "CART_ADD":
            const addIndex = state.cart.length
                ? state.cart.findIndex((item) => item.id === payload.id)
                : -1;

            if (addIndex === -1)
                state.cart.push({
                    id: payload.id,
                    count: payload.count || 1,
                });
            else
                state.cart.splice(addIndex, 1, {
                    id: payload.id,
                    count: state.cart[addIndex].count + 1,
                });

            return {
                ...state,
            };

        case "CART_REMOVE":
            const removeIndex = state.cart.length
                ? state.cart.findIndex((item) => item.id === payload.id)
                : -1;

            if (removeIndex === -1) return state;
            else {
                if (state.cart[removeIndex].count > 1)
                    state.cart.splice(removeIndex, 1, {
                        id: payload.id,
                        count: state.cart[removeIndex].count - 1,
                    });
                else state.cart.splice(removeIndex, 1);
            }

            return {
                ...state,
            };

        case "CART_RESET":
            return {
                ...state,
                cart: [],
            };

        default:
            return state;
    }
};

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
