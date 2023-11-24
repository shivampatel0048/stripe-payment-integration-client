// CouponCodeInput.js

import React, { useState } from 'react';

const CouponCodeInput = ({ applyCoupon }) => {
    const [couponCode, setCouponCode] = useState('');
    const [isCouponApplied, setIsCouponApplied] = useState(false);
    const [isCouponExpired, setIsCouponExpired] = useState(false);

    const handleApplyCoupon = () => {
        // Pass the entered coupon code to the parent component for validation
        applyCoupon(couponCode);
        if (couponCode === 'HALFOFF') {
            setIsCouponApplied(true);
        } else {
            setIsCouponExpired(true);
            setTimeout(() => {
                setIsCouponExpired(false);
            }, 1000); 
        }

    };

    return (
        <div className="coupon-code-input">
            <input
                type="text"
                placeholder="Enter Coupon Code"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
            />
            <button onClick={handleApplyCoupon}>Apply Coupon</button>

            {isCouponApplied && <p>{`'${couponCode}' applied successfully`}</p>}
            {isCouponExpired && <p className='message__color'>{`'${couponCode}' Invalid coupon code`}</p>}
        </div>
    );
};

export default CouponCodeInput;
