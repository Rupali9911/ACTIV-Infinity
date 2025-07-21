import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: { name: '' },
    reducers: {
        setUser: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
        },
    }
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
