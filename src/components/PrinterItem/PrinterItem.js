import React from 'react';
import PropTypes from 'prop-types';

export const PrinterItem = ({ printerItem }) => {
    return (
        <div className="printer-item">
            <p>driver: <span className="embed-text">{printerItem.driver}</span></p>
            <p>modName: <span className="embed-text">{printerItem.modName}</span></p>
            <p>modVersion: <span className="embed-text">{printerItem.modVersion}</span></p>
            <p>papperState: <span className="embed-text">{printerItem.papperState}</span></p>
            <p>port: <span className="embed-text">{printerItem.port}</span></p>
            <p>status: <span className="embed-text">{printerItem.status}</span></p>
        </div>
    );
}

export const printerItemType = {
    printerItem: PropTypes.shape({
        driver: PropTypes.string.isRequired,
        modName: PropTypes.string.isRequired,
        modVersion: PropTypes.number.isRequired,
        papperState: PropTypes.number.isRequired,
        port: PropTypes.string.isRequired,
        status: PropTypes.number.isRequired,
        id: PropTypes.string.isRequired,
    }),
};

PrinterItem.propTypes = printerItemType;