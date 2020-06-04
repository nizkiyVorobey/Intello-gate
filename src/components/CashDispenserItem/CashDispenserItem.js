import React from 'react';
import PropTypes from 'prop-types';


export const CashDispenserItem = ({cashDispenserItem}) => {

    return (
        <div className="cash-dispenser-item">
            <p>modName: <span className="embed-text">{cashDispenserItem.modName} </span></p>
            <p>modVersion: <span className="embed-text">{cashDispenserItem.modVersion}</span> </p>
            <ul>
                {
                    cashDispenserItem.products.lenngth
                        ? cashDispenserItem.products.map(product => (
                            <li key={product.id}>...content</li>
                        ))
                        : <p>Array is empty :(</p>
                }
            </ul>
        </div>
    );
};

export const cashDispenserItemType = {
    cashDispenserItem: PropTypes.shape({
        id: PropTypes.string.isRequired,
        modName: PropTypes.string.isRequired,
        modVersion: PropTypes.number.isRequired,
        products: PropTypes.arrayOf(PropTypes.shape({})),
    }),
};

CashDispenserItem.propTypes = cashDispenserItemType;