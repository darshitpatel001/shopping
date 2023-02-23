import React from 'react'
import Prodects from './Prodects'

export default function Home() {
    return (
        <div className='hero'>
            <div class="card text-bg-dark text-white border-0">
                <img src="/assets/bg.jpg" class="card-img" alt="Background" height="550px" />
                <div class="card-img-overlay d-flex flex-column justify-content-center" >
                    <div className="container">
                    <h5 class="card-title display-3 fw-bolder md-0">NEW SEASON ARRIVALS</h5>
                    <p class="card-text fs-2">
                        CHECK OUT ALL THE TRENDS
                    </p>
                    </div>
                </div>
            </div>
            <Prodects />
        </div>
    )
}
