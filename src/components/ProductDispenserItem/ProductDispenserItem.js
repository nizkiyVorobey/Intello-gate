import React from 'react';
import PropTypes from 'prop-types';
import { DispenserProductList } from './DispenserProductList/DispenserProductList';
import { dispenserProductItemType } from './DispenserProductItem/DispenserProductItem';

export const ProductDispenserItem = ({ productDispenserItem }) => {
    
    return (
        <div className="product-dispenser-item">
            <p>driver: <span className="embed-text">{productDispenserItem.driver}</span></p>
            <p>modName: <span className="embed-text">{productDispenserItem.modName}</span></p>
            <p>modVersion: <span className="embed-text">{productDispenserItem.modVersion}</span></p>
            <p>port: <span className="embed-text">{productDispenserItem.port}</span></p>
            <p>status: <span className="embed-text">{productDispenserItem.status}</span></p>
            <DispenserProductList productList={productDispenserItem.products} />
        </div>
    );
};

export const productDispenserItemType = {
    productDispenserItem: PropTypes.shape({
        driver: PropTypes.string.isRequired,
        modName: PropTypes.string.isRequired,
        modVersion: PropTypes.number.isRequired,
        port: PropTypes.string.isRequired,
        products: PropTypes.arrayOf(dispenserProductItemType.productItem).isRequired,
        status: PropTypes.number.isRequired,
        id: PropTypes.string.isRequired,
    })
};

ProductDispenserItem.propTypes = productDispenserItemType;