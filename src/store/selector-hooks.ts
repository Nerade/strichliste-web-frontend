import { useCallback } from 'react';
import { useMappedState } from 'redux-react-hook';
import { AppState } from '.';
import {
  Paypal,
  Settings,
  User,
  getPayPal,
  getSettings,
  getUser,
} from './reducers';
import { getUserBalance } from './reducers/user';

export function useUserName(id: number): string {
  const user = useMappedState<AppState, User | undefined>(
    useCallback(state => getUser(state, id), [])
  );
  return user ? user.name : '';
}

export function useUserBalance(id: number): number {
  return (
    useMappedState<AppState, number | undefined>(
      useCallback(state => getUserBalance(state, id), [])
    ) || 0
  );
}

export function usePayPalSettings(): Paypal {
  return useMappedState(getPayPal);
}

export function useSettings(): Settings {
  return useMappedState(getSettings);
}