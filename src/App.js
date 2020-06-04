import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { data } from "./api";

import './App.css';
import { CardReaderList } from './components/CardReaderList/CardReaderList';
import { CashAcceptorList } from './components/CashAcceptorList/CashAcceptorList';
import { CashDispenserList } from './components/CashDispenserList/CashDispenserList';
import { PosList } from './components/PosList/PosList';
import { PrinterList } from './components/PrinterList/PrinterList';
import { ProductDispenserList } from './components/ProductDispenserList/ProductDispenserList';

export const App = () => {

  // add unic id and delete empty items in array
  const [deviceTree, setdeviceTree] = useState(() => {

    const Tree = data.api.deviceTree;
    const TreeType = data.api.deviceTreeTypeMap;

    return {
      CardReader: Tree.CardReader.map((cardReaderItem) => (
        {
          ...cardReaderItem,
          id: uuidv4(),
        }
      )),

      CashAcceptor: Tree.CashAcceptor.map((cashAcceptorItem) => (
        {
          ...cashAcceptorItem,
          id: uuidv4(),
        }
      )),

      CashDispenser: Tree.CashDispenser.map((cashDispenseItem) => (
        {
          ...cashDispenseItem,
          products: cashDispenseItem.products.map((productsItem, productsIndex) => (
            {
              ...productsItem,
              id: uuidv4(),
            }
          )),
          id: uuidv4(),
        }
      )),

      Printer: Tree.Printer.map((printerItem) => (
        {
          ...printerItem,
          id: uuidv4(),
        }
      )),

      ProductDispenser: Tree.ProductDispenser.map((productDispenserItem, productDispenserIndex) => (
        {
          ...productDispenserItem,
          id: uuidv4(),
          products: productDispenserItem.products.map((productsItem, productsIndex) => {
            const product = TreeType.ProductDispenser[productDispenserIndex].products[productsIndex];

            if (product && product.count === 'number') {
              return (
                {
                  ...productsItem,
                  id: uuidv4(),
                  canEdit: true,
                }
              )
            }
            
          })
        }
      )),

      POS: Tree.POS.map((POSItem, POSIndex) => (
        {
          ...POSItem,
          id: uuidv4(),
          options: POSItem.options.map((option, optionIndex) => {
            const optionPos = TreeType.POS[POSIndex].options[optionIndex];
            if (optionPos && optionPos.merchantIdx === 'number') {
              return (
                {
                  ...option,
                  id: uuidv4(),
                  canEdit: true,
                }
              )
            }
          }).filter(item => item)
        }
      ))
    }
  });

  return (
    <div className="app">
      <CardReaderList cardReader={deviceTree.CardReader} />
      <CashAcceptorList cashAcceptor={deviceTree.CashAcceptor} />
      <CashDispenserList cashDispenser={deviceTree.CashDispenser} />
      <PosList POS={deviceTree.POS} />
      <PrinterList printerList={deviceTree.Printer} />
      <ProductDispenserList productDispenser={deviceTree.ProductDispenser} />
    </div>
  );
}

export default App;
