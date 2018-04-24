//Sync Actions
export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";
export const REMOVE_PRODUCT_FROM_CART = "REMOVE_PRODUCT_FROM_CART";
export const CONFIRM_ORDER_OPEN = "CONFIRM_ORDER_OPEN";
export const CONFIRM_ORDER_CLOSE = "CONFIRM_ORDER_CLOSE";

//Sync Actions Creators
export const addProductToCart = (product) => {
    return {
        type: ADD_PRODUCT_TO_CART,
        product: product
    }
}

export const removeProductFromCart = (index) => {
    return {
        type: REMOVE_PRODUCT_FROM_CART,
        index: index
    }
}

export const confirmOrderOpen = () => {
    return {
        type:CONFIRM_ORDER_OPEN
    }
}

export const confirmOrderClose = () => {
    return {
        type:CONFIRM_ORDER_CLOSE
    }
}