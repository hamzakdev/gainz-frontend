import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProducts } from '../apiCalls/productsApi';
import Product from '../components/Product'
import { Container, PaginationBox } from '../styled/AllProducts';
import {motion} from 'framer-motion'
import { staggerContainer } from '../components/utils/motion';
import '../additionalcss/allproducts.css'
import Loading from '../components/Loading';
import { useLocation } from 'react-router-dom';
import Pagination from 'react-js-pagination'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import LastPageIcon from '@mui/icons-material/LastPage';

const AllProducts = () => {
    const location = useLocation()
    const search = location.pathname.split('/')[2];
    document.title = `${search ? `Results for "${search}"`  : `All Products - GAINZ.GA`}`
    const dispatch = useDispatch();
    const {isFetching, products, productsCount,resultPerPage, error} = useSelector(state=>state.products)
    const [page, setPage] = useState(1)
    console.log(resultPerPage)
    useEffect(()=>{
        fetchAllProducts(dispatch, search, page)
    }, [dispatch, search, page])
  return (
      <div>
    {
        isFetching ? <Loading /> :

        error ? <span style={{color:'white'}}>NETWORK ERROR</span>
        :
        <Container>
        <h1 style={{color:'white', textAlign:'center', marginBottom:'1vmax'}}>{search ? `Results for "${search}"`  : `ALL PRODUCTS`}</h1>
        <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        className='all-products-container product-container'
        >
            {products?.map((p, index )=>(
                <Product {...p} index={index} key={p._id}/>
                ))}
            </motion.div>
            <PaginationBox>
                {
                resultPerPage <  productsCount &&
                    <Pagination
                    activePage={page}
                    itemsCountPerPage={resultPerPage}   
                    totalItemsCount={productsCount}
                    onChange={(e)=>setPage(e    )}
                    nextPageText={<ArrowForwardIosIcon />}
                    prevPageText={<ArrowBackIosNewIcon />}
                firstPageText={<FirstPageIcon />}
                lastPageText={<LastPageIcon />}
                itemClass='page-list'
                linkClass='page-link'
                activeClass='page-list-active'
                activeLinkClass='page-link-active'
                
                />
            }
            </PaginationBox>
        </Container>
    }
    </div>
        )
    }

export default AllProducts