import React from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pricing from './Pricing';
import { Link } from 'react-router-dom';

export const pricingData = [
    {
        index: 0,
        title: "Starter",
        price: "$0",
        discountedPrice: "$0",
        features: ['5 website', '5GB Disk Space', '5 Email', '5GB Bandwidth', '2 Subdomains', 'limited Support']
    },
    {
        index: 1,
        title: "Personal",
        price: "$9.99",
        discountedPrice: "$4.99",
        features: ['15 website', '15GB Disk Space', '15 Email', '15GB Bandwidth', '5 Subdomains', 'Unlimited Support']
    },
    {
        index: 2,
        title: "Ultimate",
        price: "$29.99",
        discountedPrice: "$14.99",
        features: ['50 website', '50GB Disk Space', '50 Email', '50GB Bandwidth', '10 Subdomains', 'Unlimited Support']
    },
];
const Home = () => {

    return (
        <div className="main">
            <section id="pricing" className="pricing-content section-padding">
                <div className="container">
                    <div className="section-title text-center">
                        <h2>Subscription Plans</h2>
                    </div>
                    <div className="row text-center">
                        {pricingData.map((pricing, index) => (
                            <div className="col-md-4 pricing__text" key={index}>
                                <Link to={`/payment/${index}`}>
                                    <Pricing
                                        title={pricing.title}
                                        price={pricing.price}
                                        features={pricing.features}
                                    />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
