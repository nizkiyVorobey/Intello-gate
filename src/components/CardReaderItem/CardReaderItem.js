import React from 'react';
import PropTypes from 'prop-types';

export const CardReaderItem = ({ cardReaderItem }) => {
    return (
        <div className="card-reader-item">
            <p>driver: <span className="embed-text">{cardReaderItem.driver}</span></p>
            <p>modName: <span className="embed-text">{cardReaderItem.modName}</span></p>
            <p>modVersion: <span className="embed-text">{cardReaderItem.modVersion}</span></p>
            <p>port: <span className="embed-text">{cardReaderItem.port}</span></p>
            <p>status: <span className="embed-text">{cardReaderItem.status}</span></p>
            <p>statusDescr: <span className="embed-text">{cardReaderItem.statusDescr}</span></p>
        </div>
    );
};

export const CardReaderItemType = {
    cardReaderItem: PropTypes.shape({
        id: PropTypes.string.isRequired,
        driver: PropTypes.string.isRequired,
        modName: PropTypes.string.isRequired,
        modVersion: PropTypes.number.isRequired,
        port: PropTypes.string.isRequired,
        status: PropTypes.number.isRequired,
        statusDescr: PropTypes.string.isRequired,
    })
};

CardReaderItem.propTypes = CardReaderItemType;