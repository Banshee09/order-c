import {
    RETRIEVE_ORDERS_REQUEST, RETRIEVE_ORDERS_RESPONSE,
    SHOW_ERROR
}
    from "../actions/orderActions"

const orderReducer = (
    state = {
        isLoading: false,
        orders: [],
    }, action) => {

    let nextState = {};

    switch (action.type) {

        //Async Actions
        case RETRIEVE_ORDERS_REQUEST:
            nextState = Object.assign({}, state, { isLoading: true });
            return nextState;

        case RETRIEVE_ORDERS_RESPONSE:
            let nextOrders = Object.assign([], action.orders);
            nextState = Object.assign({}, state, { isLoading: false, orders: nextOrders });
            return nextState;

        case SHOW_ERROR:
            nextState = Object.assign({}, state, { isLoading: false });
            return nextState;

        default:
            return state;
    }

}

export default orderReducer;