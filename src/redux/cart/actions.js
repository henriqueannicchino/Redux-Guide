import CartActionTypes from "./action-type";

export const addProductToCart = (payload) => ({
    type: CartActionTypes.ADD_PRODUCT,
    payload
});

export const removeProductFromCart = (payload) => ({
    type: CartActionTypes.REMOVE_PRODUCT,
    payload
});

export const increaseProductQuantityFromCart = (payload) => ({
    type: CartActionTypes.INCREASE_PRODUCT_QUANTITY,
    payload
});

export const decreaseProductQuantityFromCart = (payload) => ({
    type: CartActionTypes.DECREASE_PRODUCT_QUANTITY,
    payload
});
