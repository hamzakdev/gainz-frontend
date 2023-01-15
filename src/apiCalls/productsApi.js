import axios from 'axios'
import { productsFailure, productsStart, productsSuccess } from '../redux/productsRedux'
import { singleProductStart, singleProductSuccess, singleProductFailure  } from '../redux/singleProductRedux'


// FETCHING ALL PRODUCTS FROM DATABASE
export const fetchAllProducts = async(dispatch, search="", page)=>{
    try{
        const link = `https://jungle-green-sea-urchin-wig.cyclic.app/api/products?keyword=${search}&page=${page}`
        dispatch(productsStart())
        const {data} = await axios.get(link);
        dispatch(productsSuccess(data))
        

    }catch(err){
        dispatch(productsFailure(err.message))
    }
};

// FETCHING SINGLE PRODUCT FROM DATABASE


export const fetchSingleProduct = async(dispatch, id)=>{
    try{
        dispatch(singleProductStart())
        const {data} = await axios.get(`https://jungle-green-sea-urchin-wig.cyclic.app/api/products/${id}`);
        dispatch(singleProductSuccess(data))
        

    }catch(err){
        dispatch(singleProductFailure(err.message))
    }
};
