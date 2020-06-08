import { ADD_TO_CART } from "../actions/cart";
import CartItem from '../../models/cart-items';

const initialState = {
    items: {},
    totalAmount: 0
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const addedProduct = action.product;
            const prodPrice = addedProduct.price;
            const prodTitle = addedProduct.title;

            let updatedOrNewCartItem;

            if (state.items[addedProduct.id]) {
                updatedOrNewCartItem = new CartItem(
                    statet.items[addedProduct.id].quantity + 1,
                    prodPrice,
                    prodTitle,
                    statet.items[addedProduct.id].quantity + prodPrice
                )

                return {
                    ...state,
                    items: {
                        ...state.items,
                        [addedProduct.id]: updatedCartItem
                    },
                    totalAmount: state.totalAmount + prodPrice
                }
            } else {
                updatedOrNewCartItem = new CartItem(1, prodPrice, prodTitle, prodPrice);
                return {
                    ...state,
                    items: {
                        ...state.items,
                        [addedProduct.id]: updatedOrNewCartItem
                    },
                    totalAmount: state.totalAmount + prodPrice  
                }
            }
    }
    return state;
};