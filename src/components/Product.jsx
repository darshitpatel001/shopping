import React from 'react'
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router';
import { addCart } from '../redux/action/action';
import { useDispatch } from 'react-redux';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const Product = () => {
  const {id} = useParams();
  const [product, setproduct] = useState([]);
  const [loading, setloading] = useState(false);


  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  }
  useEffect(() => {
    const getProduct = async () => {
      setloading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setproduct(await response.json());
      setloading(false);
    }
    getProduct();
  }, [])

  const Loading = () => {
    return (
      <>
      <div className='col-md-6'>
        <Skeleton height={400}/>
      </div>
      <div className='col-md-6' style={{lineHeight:2}}>  
        <Skeleton height={50} width={300}/>
        <Skeleton height={75} />
        <Skeleton height={25} width={150}/>
        <Skeleton height={50} />
        <Skeleton height={150} />
        <Skeleton height={50} />
       
      </div>
      </>
    )
  }
  const Showproduct = () => {
    return (
      <>
        <div className='col-md-6'>
          <img src={product.image} alt={product.title} height="400px" width="400px" />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">
            {product.category}
          </h4>
          <h1 className='display-5'>{product.title}</h1>
          <p className='lead fw-bolder'>
            Rating {product.rating && product.rating.rate}
            <i className='fa fa-star'></i>
          </p>
          <h3 className='display-6 fw-bold'>
            $ {product.price}
          </h3>
          <p className='lead'>{product.description}</p>
          <button className='btn btn-outline-dark' onClick={()=>addProduct(product)}>Add To Cart</button>
          <NavLink to="/cart" className='btn btn-dark ms-2 px-3 py-2'>Go To Cart</NavLink>
        </div>
      </>
    )
  }

  return (
    <div>
      <div className='row justify-content-center'>
        {loading ? <Loading /> : <Showproduct />}
      </div>
    </div>
  )
}

export default Product;