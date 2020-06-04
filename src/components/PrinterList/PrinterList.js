import React from 'react';
import PropTypes from 'prop-types';
import { PrinterItem } from '../PrinterItem/PrinterItem';
import { printerItemType } from '../PrinterItem/PrinterItem';

export const PrinterList = ({printerList}) => {
    return (
        <div className="card #f5f5f5 grey lighten-4 printer-list">
            {
                printerList.map(printerItem => (
                    <PrinterItem printerItem={printerItem} key={printerItem.id} />
                ))
            }
        </div>
    );
};

PrinterList.propTypes = {
    printerList: PropTypes.arrayOf(printerItemType.printerItem).isRequired
};