import React from 'react';
import PropTypes from 'prop-types';
import { ProductDispenserItem, productDispenserItemType } from '../ProductDispenserItem/ProductDispenserItem';

export const ProductDispenserList = ({productDispenser}) => {
    return (
        <div className="card #f5f5f5 grey lighten-4 product-dispenser-list">
            {
                productDispenser.map(productDispenserItem => (
                    <ProductDispenserItem
                        productDispenserItem={productDispenserItem}
                        key={productDispenserItem.id}
                    />
                ))
            }
        </div>
    );
};

ProductDispenserList.propTypes = {
    productDispenser: PropTypes.arrayOf(productDispenserItemType.productDispenserItem)
}