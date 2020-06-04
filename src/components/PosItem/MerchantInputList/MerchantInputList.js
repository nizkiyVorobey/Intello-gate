import React, { useState } from 'react';


export const MerchantInputList = ({ optionItem }) => {
    const [merchantIdxValue, setMerchantIdxValue] = useState(optionItem.merchantIdx);

    const handleChange = (event) => {
        setMerchantIdxValue(event.target.value)
    }

    return (
        <div className="card-label-wrapper">
            <label htmlFor="merchant-inp" className="card-label">
                merchantIdx:
                <input type="text" id="merchant-inp" value={merchantIdxValue} onChange={handleChange} />
            </label>
        </div>
    );
};