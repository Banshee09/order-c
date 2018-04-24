import {
    ADD_PRODUCT_TO_CART,
    REMOVE_PRODUCT_FROM_CART,
    CONFIRM_ORDER_OPEN,
    CONFIRM_ORDER_CLOSE
} from "../actions/cartActions"

import { 
    SUBMIT_ORDER_RESPONSE, 
    SHOW_ERROR 
} from "../actions/orderActions"

const cartReducer = (
    state = {
        cart: [],
        isConfirming: false
    }, action) => {

    let nextCart = [];
    let nextState = {};

    switch (action.type) {

        //Sync Actions
        case ADD_PRODUCT_TO_CART:
            nextCart = Object.assign([], state.cart);
            nextCart.push(action.product);
            nextState = Object.assign({}, state, { cart: nextCart });
            return nextState;

        case REMOVE_PRODUCT_FROM_CART:
            nextCart = Object.assign([], state.cart);
            nextCart.splice(action.index, 1);
            nextState = Object.assign({}, state, { cart: nextCart });
            return nextState;

        case CONFIRM_ORDER_OPEN:
            nextCart = Object.assign([], state.cart);
            nextState = Object.assign({}, state, { cart: nextCart, isConfirming: true });
            return nextState;
  
        case CONFIRM_ORDER_CLOSE:
            nextCart = Object.assign([], state.cart);
            nextState = Object.assign({}, state, { cart: nextCart, isConfirming: false });
            return nextState;

        //Async Actions  
        case SUBMIT_ORDER_RESPONSE:
            nextCart = [];
            nextState = Object.assign({}, state, { cart: nextCart, isConfirming: false });
            return nextState;

        case SHOW_ERROR:
            nextCart = Object.assign([], state.cart);
            nextState = Object.assign({}, state, { cart: nextCart, isConfirming: false });
            return nextState;

        default:
            return state;
    }

}

export default cartReducer;