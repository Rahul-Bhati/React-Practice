import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            // mutating the state here
            state.items.push(action.payload)
        },
        removeItem: (state, action) => {
            state.items.pop()
        },
        clearCart: (state, action) => {
            state.items = []
            // state.items.length = 0
        }
    }
})

/* 
basically we are creating a slice of the store that is cart and we are adding the items to the cart
and we are also adding the actions to the cart

isme obj return hota j
 {
    actions :{
        addItem, removeItem, clearCart
    }
    reducer : 
}

isliye hum inge export karre hai
*/

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;