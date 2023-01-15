import React, { useEffect } from 'react'
import FeaturedProducts from '../components/FeaturedProducts'
import Hero from '../components/Hero'
import {fetchAllProducts} from '../apiCalls/productsApi'
import {useDispatch, useSelector}from 'react-redux'
import Loading from '../components/Loading'
import { useAlert } from 'react-alert'

const Home = () => {
  document.title = "GAINZ.GA"
  const alert = useAlert();
  const dispatch = useDispatch()
  const {error, isFetching} = useSelector(state=>state.products)
  useEffect(()=>{
    if(error){
      return alert.error(error)
    }
    fetchAllProducts(dispatch)
  }, [dispatch, error, alert])
  return (
    <>
    {
        isFetching ?
     <Loading />
       : <div>
       <Hero />
       <FeaturedProducts />
   </div>
    }
    </>
  )
}

export default Home