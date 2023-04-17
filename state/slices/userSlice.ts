import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export interface UserState {
    authenticated: boolean,
    user: object,
    user_detail: object,
}

const initialState = {
    authenticated: false,
    user: {},
    user_detail: {},
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        updateUserState(state, { payload }: PayloadAction<Partial<UserState>>) {
            console.log("USER STATE UPDATED", payload)
            Object.assign(state, payload);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(initUser.fulfilled, (state, action) => {
            console.log("we updating state", action.payload);
            Object.assign(state, action.payload);
        })
    }
})

export const initUser = createAsyncThunk(
    "user/fetch",
    async () => {
        const res = await axios.get(`http://localhost:3001/api/v1/account/get-account-info`, { withCredentials: true } )
        console.log("use data is", res.data.user)    
        return res.data.user;
    }
)

export const { updateUserState } = userSlice.actions;
export default userSlice.reducer;