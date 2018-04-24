import axios from 'axios';
import { API_URL } from '../contants';

//Sync actions
export const SELECT_CATEGORY = "SELECT_CATEGORY";
export const SELECT_PRODUCT = "SELECT_PRODUCT";
export const SET_PRODUCT_FILTER = "SET_PRODUCT_FILTER";


//Async actions
export const LOAD_PRODUCTS_REQUEST = "LOAD_PRODUCTS_REQUEST";
export const LOAD_PRODUCTS_RESPONSE = "LOAD_PRODUCTS_RESPONSE";
export const SHOW_ERROR = "SHOW_PRODUCT_ERROR";


//sync action creators
export const selectCategory = (categoryId) => {
    return {
        type: SELECT_CATEGORY,
        categoryId: categoryId
    }
}
export const selectProduct = (productId) => {
    return {
        type: SELECT_PRODUCT,
        productId: productId
    }
}

export const setProductFilter = (text) => {
    return {
        type: SET_PRODUCT_FILTER,
        text: text
    }
}

//async action creators
function loadProductsRequest() {
    return {
        type: LOAD_PRODUCTS_REQUEST
    }
};

function loadProductsResponse(categories) {
    return {
        type: LOAD_PRODUCTS_RESPONSE,
        categories: categories
    }
};

function showError(error) {
    if (error.response)
        alert(error.response.data.message);
    else
        alert(error);

    return {
        type: SHOW_ERROR,
        error: error
    }
};


//Dispatch async actions
export const loadProducts = () => {
    return dispatch => {
        dispatch(loadProductsRequest());
        axios({
            method: 'get',
            url: `${API_URL}/categories/`,
        }).then(response => {
            dispatch(loadProductsResponse(response.data.categories));
        }).catch(error => {
            dispatch(showError(error));
        })
    }
}






