import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const DispenserProductItem = ({ productItem }) => {
    const [classValue, setClassValue] = useState(productItem.class);
    const [countValue, setCountValue] = useState(productItem.count);
    const [nameValue, setNameValue] = useState(productItem.class);

    const setValue = (name, event) => {
        const { value } = event.target;
        switch (name) {
            case 'class':
                setClassValue(value);
                break;
            case 'count':
                setCountValue(value);
                break;
            case 'name':
                setNameValue(value);
                break;
            default:
                return 1
        }
    }
    
    const {id} = productItem;
    return (
        <>
            <div className="card-input-warpper">
                <label htmlFor="dispenser-inp-1" className="card-label">
                    Class:
                    <input type="text" id="dispenser-inp-1" value={classValue} onChange={(event) => setValue('class', event)} />
                </label>
            </div>
            <div className="card-input-warpper">
                <label htmlFor="dispenser-inp-2" className="card-label">
                    Count:
                    <input type="text" id="dispenser-inp-2" value={countValue} onChange={(event) => setValue('count', event)} />
                </label>
            </div>
            <div className="card-input-warpper">
                <label htmlFor="dispenser-inp-3" className="card-label">
                    Name:
                    <input type="text" id="dispenser-inp-3" value={nameValue} onChange={(event) => setValue('name', event)} />
                </label>
            </div>
        </>
    );
};

export const dispenserProductItemType = {
    productItem: PropTypes.shape({
        class: PropTypes.string.isRequired,
        count: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
    })
};

DispenserProductItem.propsTypes = dispenserProductItemType;
