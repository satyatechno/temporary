'use client';
import React, { createContext, useState } from 'react';
interface TransactionDetailType {
  contractAddress: string;
  sender: string;
  reciever: string;
  gas: string;
  amount: string;
  total: string;
  submit: () => void;
  cancel: () => void;
}
interface TransactionContextType {
  modalVisible: boolean;
  setModalVisible: (a: boolean) => void;
  transactionDetials: TransactionDetailType;
  confirmLoading: boolean;
  setConfirmLoading: (a: boolean) => void;
  setTransactionDetails: (a: any) => void;
  transactionPromise: any;
  setTransactionPromise: any;
}
export const TransactionContext = createContext<TransactionContextType>({
  modalVisible: false,
  setModalVisible: (a: boolean) => {},
  transactionDetials: {
    contractAddress: '',
    sender: '',
    reciever: '',
    gas: '',
    amount: '',
    total: '',
    submit: () => {},
    cancel: () => {},
  },
  confirmLoading: false,
  setConfirmLoading: (a: any) => {},
  setTransactionDetails: (a: any) => {},
  transactionPromise: undefined,
  setTransactionPromise: () => {},
});
const TransactionContextProvider = (props: any) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [confirmLoading, setConfirmLoading] = useState<boolean>(false);
  const [transactionPromise, setTransactionPromise] = useState<any>();
  const [transactionDetials, setTransactionDetails] =
    useState<TransactionDetailType>({
      contractAddress: '',
      sender: '',
      reciever: '',
      gas: '',
      amount: '',
      total: '',
      submit: () => {},
      cancel: () => {},
    });

  const value: TransactionContextType = {
    modalVisible,
    setModalVisible,
    transactionDetials,
    setTransactionDetails: (data: any) => setTransactionDetails(data),
    confirmLoading,
    setConfirmLoading,
    transactionPromise,
    setTransactionPromise: setTransactionPromise,
  };
  return (
    <TransactionContext.Provider value={value}>
      {props.children}
    </TransactionContext.Provider>
  );
};

export default TransactionContextProvider;
