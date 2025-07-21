import { SET_USER } from '../types/userTypes';

export const setUser = (user: string) => ({ type: SET_USER, payload: user });
