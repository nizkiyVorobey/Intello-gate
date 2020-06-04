import React from 'react';
import PropTypes from 'prop-types';
import { CashAcceptorItem, CashAcceptorItemType } from '../CashAcceptorItem/CashAcceptorItem';

export const CashAcceptorList = ({cashAcceptor}) => {
    return (
        <div className="card #f5f5f5 grey lighten-4 cash-acceptor-list">
            {
                cashAcceptor.map(cashAcceptorItem => (
                    <CashAcceptorItem cashAcceptorItem={cashAcceptorItem} key={cashAcceptorItem.id} />
                ))
            }
        </div>
    );
};

CashAcceptorList.propTypes = {
    cashAcceptor: PropTypes.arrayOf(CashAcceptorItemType.cashAcceptorItem)
};