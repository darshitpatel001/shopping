import React from 'react'
import { useState, useEffect } from 'react';

const Prodects = () => {

    const [data, setdata] = useState([]);
    const [filter, setfilter] = useState(data);
    const [loading, setloading] = useState(false);
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setloading(true);
            const response = await fetch('https://fakestoreapi.com/products');
            if (componentMounted) {
                setdata(await response.clone().json());
                setloading(false);
                console.log(filter)
            }
            return () => {
                componentMounted = false;
            }
        }
        getProducts();
    }, [])

    const Loading = () => {
        return (
            <>
                Loading....
            </>
        )
    }

    const Showproducts = () => {
        return (
            <>
                <div className='buttons d-flex justify-content-center'>
                    <button className='btn btn-outline-dark me-2'>All</button>
                    <button className='btn btn-outline-dark me-2'>Men'S Clothig</button>
                    <button className='btn btn-outline-dark me-2'>Women'S Clothig</button>
                    <button className='btn btn-outline-dark me-2'>Jewelery</button>
                    <button className='btn btn-outline-dark me-2'>Electronic</button>
                </div>
                {
                    filter.map((product) => {
                        return (
                            <>
                                <div className="col-md-3">
                                    <div class="card">
                                        <img src={product.image} class="card-img-top" alt={product.title} />
                                        <div class="card-body">
                                            <h5 class="card-title">{product.title}</h5>
                                            <p class="card-text">${product.price}</p>
                                            <a href="#" class="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </>
        )
    }
    return (
        <div>
            <div className='container my-2 py-2'>
                <div className='row'>
                    <div className='col-12 mb-5'>
                        <h1 className='display-6 fw-bolder text-center'>Latest Products</h1><hr />
                    </div>
                </div>
            </div>
            <div className='row justify-content-center'>
                {loading ? <Loading /> : <Showproducts />}
            </div>
        </div>
    )
}

export default Prodects;