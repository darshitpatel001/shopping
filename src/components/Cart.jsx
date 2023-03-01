import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addCart } from '../redux/action/action';

const Cart = () => {
    
    const product = useSelector((state) => state.handleCart);

    useEffect(() => {
        if(product) {
            console.log("hello");
        }
      }, [product])
     const dispatch = useDispatch();
     const addProduct = (product) => {
       dispatch(addCart(product[0]));
       
     }
    return (
        <div>
            <div>
                <div className='row'>
                    <div className='col-md-4'>
                        <img src={product[0].image} alt={product[0].title} height="200px" width="180px" />
                    </div>
                    <div className='col-md-4'>
                        <h3>{product[0].title}</h3>
                        <p className='lead fw-bold'>
                            {product[0].qty} X ${product[0].price} = $
                            {product[0].qty * product[0].price}
                        </p>
                        <button className='btn btn-outline-dark me-4' onClick={()=>addProduct(product[0])}><i className='fa fa-minus'></i></button>
                        <button className='btn btn-outline-dark me-4' ><i className='fa fa-plus'></i></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;