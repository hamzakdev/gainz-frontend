import axios from 'axios'
import { firebaseRegister } from '../firebase/firebaseFunctions';
import { loginFailure, loginStart, loginSuccess,registerFailure, registerStart, registerSuccess, getMeStart, getMeSuccess, getMeFailure, logoutSuccess, logoutFailure } from '../redux/userRedux'

// --LOGIN
export const login = async(dispatch,email,password)=>{
     try{
        dispatch(loginStart())

        const config =  {
            headers: {"Content-Type":"application/json"},  
            // withCredentials:true 
            
        }

        const {data} = await axios.post(`https://jungle-green-sea-urchin-wig.cyclic.app/api/users/login`, {email,password},config);
        dispatch(loginSuccess(data))
        

    }catch(err){
        dispatch(loginFailure(err.response.data.error))
    }
};

// --REGISTER

export const register = async(dispatch,name, email, password,pfp )=>{
    try{
        dispatch(registerStart())
        
        if(pfp){ firebaseRegister(dispatch, pfp, name, email, password) } 
        else{
            const {data} = await axios.post(`https://jungle-green-sea-urchin-wig.cyclic.app/api/users/register`, {name,email,password}, {headers: {"Content-Type":"application/json", }});
            dispatch(registerSuccess(data))  
        } 

    }catch(err){
        dispatch(registerFailure(err.response.data.error))
    }
};
// --GET ME

export const getMe = async(dispatch)=>{
    try{
        dispatch(getMeStart())
        const {data} = await axios.get(`https://jungle-green-sea-urchin-wig.cyclic.app/api/users`, );
        dispatch(getMeSuccess(data))
        

    }catch(err){
        dispatch(getMeFailure(err.response.data.error))
    }
};

// --LOGOUT

export const logout = async(dispatch)=>{
    try{
            await axios.get(`https://jungle-green-sea-urchin-wig.cyclic.app/api/users/logout`);
        dispatch(logoutSuccess())
        

    }catch(err){
        dispatch(logoutFailure(err))
    }
};


