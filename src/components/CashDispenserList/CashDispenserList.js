import React from 'react';
import { CashDispenserItem, cashDispenserItemType } from '../CashDispenserItem/CashDispenserItem';
import PropTypes from 'prop-types';


export const CashDispenserList = ({ cashDispenser }) => {

    return (
        <div className="card #f5f5f5 grey lighten-4 cash-dispenser-list" >
            {
                cashDispenser.map(cashDispenserItem => (
                    <CashDispenserItem cashDispenserItem={cashDispenserItem} key={cashDispenserItem.id} />
                ))
            }
        </div>
    );
};

CashDispenserList.propTypes = {
    cashDispenser: PropTypes.arrayOf(PropTypes.shape({
        ...cashDispenserItemType
    }))
}