import React from 'react';
import PropTypes from 'prop-types';

export const CashAcceptorItem = ({ cashAcceptorItem }) => {
    return (
        <div className="cash-acceptor-item">
            <p>driver: <span className="embed-text">{cashAcceptorItem.driver}</span></p>
            <p>modName: <span className="embed-text">{cashAcceptorItem.modName}</span></p>
            <p>modVersion: <span className="embed-text">{cashAcceptorItem.modVersion}</span></p>
            <p>port: <span className="embed-text">{cashAcceptorItem.port}</span></p>
            <p>status: <span className="embed-text">{cashAcceptorItem.status}</span></p>
            <p>type: <span className="embed-text">{cashAcceptorItem.type}</span></p>
            <p>version:<span className="embed-text"> {cashAcceptorItem.version}</span></p>
        </div>
    );
};

export const CashAcceptorItemType = {
    cashAcceptorItem: PropTypes.shape({
        id: PropTypes.string.isRequired,
        driver: PropTypes.string.isRequired,
        modName: PropTypes.string.isRequired,
        modVersion: PropTypes.number.isRequired,
        port: PropTypes.string.isRequired,
        status: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        version: PropTypes.string.isRequired,
    })
};

CashAcceptorItem.propTypes = CashAcceptorItemType;