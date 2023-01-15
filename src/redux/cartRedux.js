import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        products:[],
        quantity:0,
        total:0,
        
    },
    reducers:{
        addToCart:(state,action)=>{
            state.quantity += 1;
            state.products.push(action.payload);
            state.total += action.payload.price * action.payload.quantity    
            
        },
        removeFromCart:(state,action)=>{
            state.quantity -= 1;
           state.products =  state.products.filter((p)=>p._id !== action.payload._id);
            state.total -= action.payload.price * action.payload.quantity
            
        },
        
    }
})

export const {addToCart,removeFromCart} = cartSlice.actions
export default cartSlice.reducer