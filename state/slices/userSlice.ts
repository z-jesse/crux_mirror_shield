import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export interface User {
    created_at: Date,
    email: string,
    email_confirmation: string,
    email_confirmed: boolean,
    id: number,
    password_digest: string,
    phone: string,
    phone_confirmation: string,
    phone_confirmed: boolean,
    status: string,
    updated_at: Date,
}

export interface UserDetail {
    created_at: Date,
    dob: string,
    first_name: string,
    id: number,
    last_name: string,
    updated_ad: Date,
    user_id: number,
}

export interface UserState {
    authenticated: boolean,
    user: User,
    user_detail: UserDetail,
}

const initialUser = {
    created_at: 0,
    email: "",
    email_confirmation: "",
    email_confirmed: false,
    id: 0,
    password_digest: "",
    phone: "",
    phone_confirmation: "",
    phone_confirmed: false,
    status: "",
    updated_at: 0,
}

const initialUserDetail = {
    created_at: 0,
    dob: "",
    first_name: "",
    id: 0,
    last_name: "",
    updated_ad: 0,
    user_id: 0,
}

const initialState = {
    authenticated: false,
    user: initialUser,
    user_detail: initialUserDetail,
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
            Object.assign(state, action.payload);
        })
    }
})

export const initUser = createAsyncThunk(
    "user/fetch",
    async () => {
        const res = await axios.get(`http://localhost:3001/api/v1/account/get-account-info`, { withCredentials: true } )
        console.log("user data is", res.data)    
        return res.data.user;
    }
)

export const { updateUserState } = userSlice.actions;
export default userSlice.reducer;