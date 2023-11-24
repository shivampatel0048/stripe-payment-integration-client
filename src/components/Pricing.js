import React from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Pricing = ({ title, price, features, onClick }) => {
    return (
            <div className="col-lg-4 col-sm-6 col-xs-12 wow fadeInUp">
                <div className="pricing_design">
                    <div className="single-pricing">
                        <div className="price-head">
                            <h2>{title}</h2>
                            <h1 className="price">{price}</h1>
                            <span>/Monthly</span>
                        </div>
                        <ul>
                            {features.map((feature, index) => (
                                <li key={index}><b>{feature}</b></li>
                            ))}
                        </ul>
                        <div className="pricing-price"></div>
                        <a href='#' className="price_btn" onClick={onClick}>Order Now</a>
                    </div>
                </div>
            </div>
    );
};

export default Pricing;
