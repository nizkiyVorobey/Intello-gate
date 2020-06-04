import React from 'react';
import PropTypes from 'prop-types';
import 'materialize-css/dist/css/materialize.min.css'

import { CardReaderItem, CardReaderItemType } from '../CardReaderItem/CardReaderItem';

export const CardReaderList = ({cardReader}) => {

    return (
        <div className="card #f5f5f5 grey lighten-4 card-reader-list">
            {
                cardReader.map(cardReaderItem => (
                    <CardReaderItem cardReaderItem={cardReaderItem} key={cardReaderItem.id} />
                ))
            }
        </div>
    );
};



CardReaderList.propTypes = {
    cardReader: PropTypes.arrayOf(CardReaderItemType.cardReaderItem)
};