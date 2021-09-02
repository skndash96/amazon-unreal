import { useMemo } from "react";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

let store;

const initialState = {
    navIsOpen: false,
    cart: [],
    wishlist: []
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
        Cart
        ********/
        case 'CART_ADD':
            return {
                ...state,
                cart: [...state.cart, payload.id]
            }
        
        case 'CART_REMOVE':
            if (!state.cart.includes(payload.id)) return state
            
            state.cart.splice(
                state.cart.indexOf(payload.id),
                1
            )
            
            return {
                ...state
            }
        
        case 'CART_RESET':
            return {
                ...state,
                cart: payload.cart
            }
        
        
        /*********
        Wishlist
        ********/
        case 'WISHLIST_ADD':
            return {
                ...state,
                wishlist: [...state.wishlist, payload.id]
            }
            
        case 'WISHLIST_REMOVE':
            if (!state.wishlist.includes(payload.id)) return state
            
            state.wishlist.splice(
                state.wishlist.indexOf(payload.id),
                1
            )
            
            return {
                ...state
            }
            
        case 'WISHLIST_RESET':
            return {
                ...state,
                wishlist: payload.wishlist
            }

        
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
