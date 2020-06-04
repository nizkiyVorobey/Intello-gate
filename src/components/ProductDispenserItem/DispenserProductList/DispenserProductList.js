import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { DispenserProductItem } from '../DispenserProductItem/DispenserProductItem';

export const DispenserProductList = ({ productList }) => {

    return (
        <div className="dispancer-product-list card-input-list">
            {
                productList.map((productItem, index) => (
                    <DispenserProductItem
                        productItem={productItem}
                        key={productItem.id}
                    />
                ))
            }
        </div>
    );
};
