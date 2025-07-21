import { INCREMENT, DECREMENT, CounterAction } from '../types/counterTypes';

const initialState = { value: 0 };

const counterReducer = (state = initialState, action: CounterAction) => {
    switch (action.type) {
        case INCREMENT:
            return { value: state.value + 1 };
        case DECREMENT:
            return { value: state.value - 1 };
        default:
            return state;
    }
};

export default counterReducer;
