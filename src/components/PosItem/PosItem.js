import React from 'react';
import PropTypes from 'prop-types';
import { MerchantInputList } from './MerchantInputList/MerchantInputList';

export const PosItem = ({ posItem }) => {

    return (
        <div className="pos-item">
            <p>driver: <span className="embed-text">{posItem.driver}</span></p>
            <p>modName: <span className="embed-text">{posItem.modName}</span></p>
            <p>modVersion: <span className="embed-text">{posItem.modVersion}</span></p>
            <p>port: <span className="embed-text">{posItem.port}</span></p>
            <p>status: <span className="embed-text">{posItem.status}</span></p>

            <div className="card-input-list">
                {
                    posItem.options.length
                        ? posItem.options.map(optionItem => (
                            <MerchantInputList optionItem={optionItem} key={optionItem.id} />
                        ))
                        : <p>Array is empty :(</p>
                }
            </div>
        </div>
    );
};

export const posItemType = {
    posItem: PropTypes.shape({
        driver: PropTypes.string.isRequired,
        modName: PropTypes.string.isRequired,
        modVersion: PropTypes.number.isRequired,
        options: PropTypes.arrayOf(PropTypes.shape({
            merchantIdx: PropTypes.string
        })),
        port: PropTypes.string.isRequired,
        status: PropTypes.number.isRequired,
    })
}

PosItem.propTypes = posItemType;