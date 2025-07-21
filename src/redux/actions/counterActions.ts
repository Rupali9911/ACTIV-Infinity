import { INCREMENT, DECREMENT } from '../types/counterTypes';

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
