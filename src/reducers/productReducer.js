import {
    SELECT_CATEGORY, SELECT_PRODUCT,
    SET_PRODUCT_FILTER,
    LOAD_PRODUCTS_REQUEST, LOAD_PRODUCTS_RESPONSE,
    SHOW_ERROR
}
    from "../actions/productActions"

const productReducer = (
    state = {
        isLoading: true,
        isDetailing: false,
        categories: [],
        categoryId: 0,
        productId: 0,
        filter: ''
    }, action) => {
    let nextState = {};

    switch (action.type) {
        //Sync Actions
        case SELECT_CATEGORY:
            nextState = Object.assign({}, state, { categoryId: action.categoryId });
            return nextState;

        case SELECT_PRODUCT:
            nextState = Object.assign({}, state, { productId: action.productId });
            return nextState;

        case SET_PRODUCT_FILTER:
            nextState = Object.assign({}, state, { filter: action.text });
            return nextState;

        //Async Actions
        case LOAD_PRODUCTS_REQUEST:
            nextState = Object.assign({}, state, { isLoading: true });
            return nextState;

        case LOAD_PRODUCTS_RESPONSE:
            nextState = Object.assign({}, state, { isLoading: false, categories: action.categories,
                 categoryId: action.categories[0].id });
            return nextState;

        case SHOW_ERROR:
            nextState = Object.assign({}, state, { isLoading: false });
            return nextState;

        default:
            return state;
    }

}

export default productReducer;