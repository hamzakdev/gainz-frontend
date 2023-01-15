import { createSlice } from "@reduxjs/toolkit";

const singleProductSlice = createSlice({
    name: 'Single Product',
    initialState:{
        product:[],
        isFetching: false,
        error:false,
    },
    reducers:{
        singleProductStart:(state)=>{
            state.isFetching = true
        },
        singleProductSuccess:(state, action)=>{
            state.isFetching = false
            state.error = false
        state.product = action.payload.product
            
        },
        singleProductFailure:(state, action)=>{
            state.isFetching = false
            state.error = action.payload
            
        },
    }
})

export const {singleProductStart,singleProductSuccess,singleProductFailure } = singleProductSlice.actions
export default singleProductSlice.reducer