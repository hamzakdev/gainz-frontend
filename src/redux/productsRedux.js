import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: 'products',
    initialState:{
        products:[],
        isFetching: false,
        error:false,
        productsCount:0,
        resultPerPage:0
        
    },
    reducers:{
        productsStart:(state)=>{
            state.isFetching = true
        },
        productsSuccess:(state, action)=>{
            state.isFetching = false
            state.error = false
        state.products = action.payload.products
            state.productsCount = action.payload.productCount
            state.resultPerPage = action.payload.resultperPage
            
        },
        productsFailure:(state, action)=>{
            state.isFetching = false
            state.error = action.payload
            
        },
    }
})

export const {productsStart,productsSuccess,productsFailure } = productsSlice.actions
export default productsSlice.reducer