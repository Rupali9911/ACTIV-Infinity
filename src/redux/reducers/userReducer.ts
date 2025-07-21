import { SET_USER, UserAction } from '../types/userTypes';

const initialState = { user: '' };

const userReducer = (state = initialState, action: UserAction) => {
    switch (action.type) {
        case SET_USER:
            return { ...state, user: action.payload };
        default:
            return state;
    }
};

export default userReducer;
