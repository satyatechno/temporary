import { useState } from 'react';
import useTransaction from './useTransaction';
import { useRouter } from 'next/navigation';
import { useAppContext } from '@/app/Context/AuthContext';
import {
  getTouenamentEntry,
  tournamentTicketEntryApi,
} from '@/services/tournament';

function useTournament() {
  const [paymentStarted, setPaymentStarted] = useState(false);
  const [startGame, setStartGame] = useState(false);
  const { estimateGas } = useTransaction();
  const router = useRouter();
  const { userData, wallet } = useAppContext();
  //   useEffect(()=>{
  //     if(transaction){
  //       setStartGame(true)
  //     }
  //   },[transaction])
  const errorHandler = (message: any) => {
    let errorMessage = '';
    if (message?.reason) {
      if (message?.reason?.includes('insufficient funds')) {
        errorMessage =
          'Insufficient balance. Please top up to continue the fun!';
      }
    }

    // setErrorDetails({
    //   message: errorMessage?.length ? errorMessage : message?.toString(),
    //   onPress: () => {
    //     setErrorVisible(false);
    //     setErrorDetails(null);
    //     router.back();
    //   },
    // });
    // setErrorVisible(true);
  };

  const tournamentNavigator = async (
    tournament: any,
    free = false,
    rejoin = false
  ) => {
    const data = {
      id: tournament?.stage ?? 3,
      type: tournament?.game.type,
      name: tournament?.game.name,
      game: tournament?.game.name,
      gemeClass: tournament?.game?.gemeClass,
      serial: tournament?.serial,
      entryFee: tournament?.entryFee,
      gameType: tournament?.gameType ?? 'tournament',
      stage: tournament?.stage ?? 3,
      landscape: tournament?.game.landscape,
      buildUrl: tournament?.game?.buildUrl,
      twitter: free,
      code: '',
      practice: 'false',
      userId: wallet?.address,
      rejoin,
    };
    //@ts-ignore
    const queryString = new URLSearchParams(data).toString();
    router.push(`/tournament/play/${tournament?.serial}?${queryString}`);
  };

  const playTournament = async (serial: any, entryFee: any) => {
    try {
      const response = await getTouenamentEntry({
        address: wallet?.address,
        tournament: serial,
        // mood: 'paid',
      });
      const entryId = response.data.participate.serial;

      localStorage.setItem('entryId', entryId?.toString());
      localStorage.setItem('tournamentId', serial?.toString());
      let ref = '0x0346edeC853bCC92657734cE99045Eb0BA7B90Fb';

      let options = {
        tournamentId: serial,
        ref,
        entryId,
      };

      await estimateGas({
        type: 'tournament',
        address: wallet?.address,
        method: 'enterTournament',
        args: {
          tournamentId: serial,
          playerRefAddress: userData?.refree_address
            ? userData?.refree_address
            : '0x0346edeC853bCC92657734cE99045Eb0BA7B90Fb',
          entryId: entryId,
          value: entryFee,
        },
      });

      // setPaymentStarted(true);
      // let game_payment = await thirdWebTransactionTournament(
      //   options,
      //   parseFloat(entryFee),
      // );

      // console.log(game_payment);
      // if (game_payment.hash) {

      //   AsyncStorage.setItem('entryId', entryId?.toString());
      //   AsyncStorage.setItem('tournamentId', serial?.toString());
      //   setStartGame(true);
      //   setTransaction(true);
      //   setPaymentStarted(false);
      // }
    } catch (error: any) {
      console.log(error, 'error');
      if (error) {
        errorHandler(error);
      } else {
        setTimeout(() => {
          router.back();
        }, 500);
      }
    }
  };

  const playTournamentFree = async (serial: any) => {
    try {
      setPaymentStarted(true);
      const res = await tournamentTicketEntryApi({
        address: wallet?.address,
        tournament: serial,
      });
      console.log('res.entry', res.data);

      const response = await getTouenamentEntry({
        address: wallet?.address,
        tournament: serial,
      });
      console.log('entry received: ' + JSON.stringify(response?.data));
      const entryId = response.data.participate.serial;

      localStorage.setItem('entryId', entryId?.toString());
      localStorage.setItem('tournamentId', serial?.toString());

      setStartGame(true);
      //   setTransaction(true);
      setPaymentStarted(false);
    } catch (error: any) {
      console.log(error, 'error');
      if (error) {
        errorHandler(error);
      } else {
        setTimeout(() => {
          router.back();
        }, 500);
      }
    }
  };

  return {
    paymentStarted,
    playTournament,
    tournamentNavigator,
    startGame,
    setStartGame,
    playTournamentFree,
  };
}

export default useTournament;
