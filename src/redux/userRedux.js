import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'User',
    initialState:{
        user:[],
        isFetching: false,
        error:false,
        isLoggedIn:false
    },
    reducers:{
        loginStart:(state)=>{
            state.isFetching = true
            state.isLoggedIn =false

            
        },
        loginSuccess:(state, action)=>{ 
            state.isFetching = false
            state.error = false
            state.user = action.payload.others
            state.isLoggedIn =true

            
        },
        loginFailure:(state, action)=>{
            state.isFetching = false
            state.error = action.payload
            state.isLoggedIn =false

            
        },
        registerStart:(state)=>{
            state.isFetching = true
            state.isLoggedIn =false

            
        },
        registerSuccess:(state, action)=>{ 
            state.isFetching = false
            state.error = false
            state.user = action.payload.others
            state.isLoggedIn =true

            
        },
        registerFailure:(state, action)=>{
            state.isFetching = false
            state.error = action.payload
            state.isLoggedIn =false

            
        },
        getMeStart:(state)=>{
            state.isFetching = true
            state.isLoggedIn =false

            
        },
        getMeSuccess:(state, action)=>{ 
            state.isFetching = false
            state.user = action.payload.others
            state.isLoggedIn =true
            // return this.state

            
        },
        getMeFailure:(state, action)=>{
            state.isFetching = false
            state.error = action.payload
            state.isLoggedIn =false
            state.user = null

            
        },
        logoutSuccess:(state, action)=>{ 
            state.user = null
            state.isLoggedIn =false

            
        },
        logoutFailure:(state, action)=>{
            state.error = action.payload

            
        },
        clearErrors:(state)=>{
            state.error = null
            
        },
    }
})

export const {loginStart,loginSuccess,loginFailure, registerStart,registerSuccess,registerFailure,getMeStart,getMeSuccess,getMeFailure,logoutSuccess, logoutFailure, clearErrors } = userSlice.actions
export default userSlice.reducer