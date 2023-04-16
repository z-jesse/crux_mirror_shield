import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
    authenticated: boolean,
    email: string,
    id: number,
}

const initialState = {
    authenticated: false,
    email: '',
    id: 0,
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        updateUserState(state, { payload }: PayloadAction<Partial<UserState>>) {
            console.log("paylaod", payload)
            Object.assign(state, payload);
        },
    }
})

export const { updateUserState } = userSlice.actions;
export default userSlice.reducer;