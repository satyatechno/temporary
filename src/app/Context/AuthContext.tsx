'use client';
import { activeWalletApi, getUserApi } from '@/services/GameServices';
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';

import Cookies from 'js-cookie';

interface AppContextType {
  userData: any;
  setUserData: (user: any) => void;
  wallet: any;
  fetchUser: () => void;
  fetchActiveWallet: () => void;
  setMedium: (value: any) => void;
  medium: any;
  loadingWallet: boolean;
  userLoading: boolean;
}

const AppContext = createContext<AppContextType | null>(null);
const token = Cookies.get('userToken');

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [wallet, setWallet] = useState(null);
  const [loadingWallet, setLoadingWallet] = useState(false); // currently not in use
  const [userData, setUserData] = useState<any>(null);
  const [userLoading, setUserLoading] = useState(false);

  //Active button state (ticket / currency)
  const [medium, setMedium] = useState('ticket');

  // user details
  const fetchUser = async () => {
    try {
      setUserLoading(true);
      const res = await getUserApi();
      setUserData(res.data);
    } catch (error: any) {
      console.log('error user details', error?.response?.data);
    } finally {
      setUserLoading(false);
    }
  };
  useEffect(() => {
    if (token) fetchUser();
  }, [token]);

  // active wallet data
  const fetchActiveWallet = async () => {
    try {
      setLoadingWallet(true);
      const res = await activeWalletApi();
      setWallet(res?.data); // Set wallet state
      setMedium(res?.data?.balance > 0 ? 'currency' : 'ticket');
    } catch (error: any) {
      console.log('error wallet details', error?.response?.data);
    } finally {
      setLoadingWallet(false);
    }
  };

  useEffect(() => {
    if (token) fetchActiveWallet();
  }, [token]);

  return (
    <AppContext.Provider
      value={{
        userData,
        setUserData,
        wallet,
        fetchActiveWallet,
        fetchUser,
        setMedium,
        medium,
        loadingWallet,
        userLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
