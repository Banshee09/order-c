import axios from 'axios';
import { API_URL } from '../contants';

//Async Actions
export const SUBMIT_ORDER_REQUEST = "SUBMIT_ORDER_REQUEST";
export const SUBMIT_ORDER_RESPONSE = "SUBMIT_ORDER_RESPONSE";
export const RETRIEVE_ORDERS_REQUEST = "RETRIEVE_ORDERS_REQUEST";
export const RETRIEVE_ORDERS_RESPONSE = "RETRIEVE_ORDERS_RESPONSE";
export const SHOW_ERROR = "SHOW_ORDER_ERROR";

//Async Actions Creators
const submitOrderRequest = () => {
    return {
        type: SUBMIT_ORDER_REQUEST,
    }
}

const submitOrderResponse = (orderId) => {
    return {
        type: SUBMIT_ORDER_RESPONSE,
        orderId: orderId
    }
}

const retrieveOrdersRequest = () => {
    return {
        type: RETRIEVE_ORDERS_REQUEST
    }
}

const retrieveOrdersResponse = (orders) => {
    return {
        type: RETRIEVE_ORDERS_RESPONSE,
        orders: orders
    }
}

const showError = (error) => {
    if (error.response)
        alert(error.response.data.message);
    else
        alert(error);

    return {
        type: SHOW_ERROR,
        error: error
    }
};

//dispatch async actions
export const submitOrder = (order) => {
    return dispatch => {
        dispatch(submitOrderRequest());
        axios({
            method: 'post',
            url: `${API_URL}/orders/`,
            data: order
        }).then(response => {
            dispatch(submitOrderResponse(response.data.orderId));
        }).catch(error => {
            dispatch(showError(error));
        })
    }
}

export const retrieveOrders = (name, phone) => {
    return dispatch => {
        dispatch(retrieveOrdersRequest());
        axios({
            method: 'get',
            url: `${API_URL}/orders/customer?name=${name}&phone=${phone}`
        }).then(response => {
            dispatch(retrieveOrdersResponse(response.data.orders));
        }).catch(error => {
            dispatch(showError(error));
        })
    }
}

