import { useContext, useState } from 'react';
import { estimateGasApi, sendTransactionApi } from '../services/transaction';
import { useAppContext } from '@/app/Context/AuthContext';
import { TransactionContext } from '@/app/Context/TransactionContext';
import config from '../../config';
type TChallengeArgs = {
  gameId: number | number;
  address: string;
  value: string | number;
};
type TTournamentArgs = {
  tournamentId: number | number;
  playerRefAddress: string;
  entryId: number | number;
  value: string | number;
};

type TEstimateOrTransaction = {
  method: 'createOrJoinGame' | 'enterTournament';
  type: 'challenge' | 'tournament';
  address: string;
  args: TChallengeArgs | TTournamentArgs;
};

const useTransaction = () => {
  const [estimateLoading, setEstimateLoading] = useState(false);
  // const [transactionLoading, setTransactionLoading] = useState(false);
  // const {setTransaction} = useContext(PaymentValidation);
  const { fetchActiveWallet } = useAppContext();
  const {
    setConfirmLoading,
    setModalVisible,
    setTransactionDetails,
  } = useContext(TransactionContext);

  const contractAddress = {
    challenge: config.oneVoneContract,
    tournament: config.tournamentContract,
  };

  const estimateGas = async (data: TEstimateOrTransaction) => {
    try {
      setEstimateLoading(true);
      const res = await estimateGasApi(data);
      console.log('res data estimate', res.data);
      setTransactionDetails({
        contractAddress: contractAddress[data.type],
        sender: data.address,
        reciever: 'Gaming Arcade',
        gas: res.data?.data,
        amount: data?.args.value,
        total:
          parseFloat(data?.args.value?.toString()) + parseFloat(res.data?.data),
        submit: async () => {
          await sendTransaction(data);
        },
        cancel: () => {},
      });
      setModalVisible(true);
    } catch (error) {
      console.log('error estimation', error);
    } finally {
      setEstimateLoading(false);
    }
  };

  const sendTransaction = async (data: TEstimateOrTransaction) => {
    try {
      setConfirmLoading(true);
      const res = await sendTransactionApi(data);
      console.log('res data transaction', res.data);

      // setTransaction(true)
      fetchActiveWallet();
    } catch (error) {
      // setTransaction(false)
      console.log('error estimation', error);
    } finally {
      setConfirmLoading(false);
      setModalVisible(false);
    }
  };

  return {
    estimateGas,
    sendTransaction,
    estimateLoading,
    // transactionLoading,
  };
};
export default useTransaction;
