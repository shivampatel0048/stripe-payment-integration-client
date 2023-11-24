import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Pricing from './Pricing';
import { pricingData } from './Home';
import CouponCodeInput from './CouponCodeInput';
import { loadStripe } from '@stripe/stripe-js';

const PaymentPage = () => {
    const { index } = useParams();
    const selectedPricing = pricingData[parseInt(index, 10)];
    const [appliedCoupon, setAppliedCoupon] = useState(null);

    const applyCoupon = (couponCode) => {
        if (couponCode === 'HALFOFF') {
            setAppliedCoupon(couponCode);
        } else {
            setAppliedCoupon(null);
        }
    };

    const makePayment = async () => {
        // Load the Stripe script with your public key
        const stripe = await loadStripe("pk_test_51OFdnMSAjlmRNwIxhroXaYM5f2Ky0uWi8nSjQh6rg4YxG74KPuFsOf2lGDbMK9KVXhIUP0jTyMX4DpgwATIbZ8hN00Wy1iQLbo");

        const body = {
            product_id: index,
            plane: selectedPricing.title,
            price: appliedCoupon ? selectedPricing.discountedPrice : selectedPricing.price,
            features: selectedPricing.features,
        };


        const headers = {
            "Content-Type": "application/json"
        };

        // Send a POST request to your server to create a checkout session
        const response = await fetch("http://localhost:7000/api/create-checkout-session", {
            method: "POST",
            headers: headers,
            body: JSON.stringify(body)
        });

        // Parse the response as JSON
        const session = await response.json();

        // Redirect to the Stripe Checkout page
        const result = await stripe.redirectToCheckout({
            sessionId: session.id
        });

        // Handle any errors that occurred during redirection
        if (result.error) {
        }
    };


    return (
        <div className="main">
            <section id="pricing" className="pricing-content section-padding">
                <div className="container">
                    <div className="section-title text-center">
                        <h2>Payment Detail</h2>
                    </div>
                    <div className="row text-center">
                        <div className="col-md-4 pricing__text">
                            <Pricing
                                title={selectedPricing.title}
                                price={appliedCoupon ? selectedPricing.discountedPrice : selectedPricing.price}
                                features={selectedPricing.features}
                                onClick={makePayment}
                            />
                        </div>
                        <div className="col-md-8">
                            {/* Add CouponCodeInput component here */}
                            <CouponCodeInput applyCoupon={applyCoupon} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PaymentPage;
