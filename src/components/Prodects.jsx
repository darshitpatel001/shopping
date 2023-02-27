import React from 'react';
import { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { NavLink } from 'react-router-dom';

const Prodects = () => {

    const [data, setdata] = useState([]);
    const [filter, setfilter] = useState(data);
    const [loading, setloading] = useState(false);
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setloading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if (componentMounted) {
                setdata(await response.clone().json());
                setfilter(await response.json());
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
            <div className="col-md-3">
                <Skeleton height={350}/>
            </div>
            <div className="col-md-3">
                <Skeleton height={350}/>
            </div>
            <div className="col-md-3">
                <Skeleton height={350}/>
            </div>
            <div className="col-md-3">
                <Skeleton height={350}/>
            </div>
            </>
        )
    }

    const filterProduct = (cat) =>{
        const updatelist = data.filter((x)=>x.category === cat);
        setfilter(updatelist);
    }
    const Showproducts = () => {
        return (
            <>
            <div className='row'></div>
                <div className='buttons d-flex justify-content-center mb-4 pb-4'>
                    <button className='btn btn-outline-dark me-2 col-sm-12 col-lg-2' onClick={()=>setfilter(data)}>All</button>
                    <button className='btn btn-outline-dark me-2 col-sm-12 col-lg-2' onClick={()=>filterProduct("men's clothing")}>Men'S Clothig</button>
                    <button className='btn btn-outline-dark me-2 col-sm-12 col-lg-2' onClick={()=>filterProduct("women's clothing")}>Women'S Clothig</button>
                    <button className='btn btn-outline-dark me-2 col-sm-12 col-lg-2' onClick={()=>filterProduct("jewelery")}>Jewelery</button>
                    <button className='btn btn-outline-dark me-2 col-sm-12 col-lg-2' onClick={()=>filterProduct("electronics")}>Electronic</button>
                </div>
                {
                    filter.map((product) => {
                        return (
                            <>
                                <div className="col-md-3 mb-4">
                                    <div className="card h-100 text-center p-4" key={product.id}>
                                        <img src={product.image} class="card-img-top" alt={product.title} height="250px" />
                                        <div className="card-body">
                                            <h5 className="card-title mb-0">{product.title.substring(0,12)}...</h5>
                                            <p className="card-text lead fw-bold">${product.price}</p>
                                            <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">Buy Now</NavLink>
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