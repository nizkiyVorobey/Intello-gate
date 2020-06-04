import React from 'react';
import PropTypes from 'prop-types';

import { PosItem } from '../PosItem/PosItem';
import { posItemType } from '../PosItem/PosItem';

export const PosList = ({POS}) => {
    return (
        <div className="card #f5f5f5 grey lighten-4 pos-list">
            {
                POS.map(posItem => (
                    <PosItem posItem={posItem} key={posItem.id} />
                ))
            }
        </div>
    );
};

PosList.propTypes = {
    POS: PropTypes.arrayOf(posItemType.posItem)
}