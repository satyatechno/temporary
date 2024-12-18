import axiosInstance from "./axiosInstance";

export const estimateGasApi=(data:any)=>axiosInstance.post('user/wallet/estimateGasFees',data)
export const sendTransactionApi=(data:any)=>axiosInstance.post('user/wallet/perform/transaction',data)