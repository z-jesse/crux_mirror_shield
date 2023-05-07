import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export interface PaymentMethod {
    id: number,
    status: string,
    data: any,
    bank_account_id: string,
}

export interface PaymentMethodState {
    payment_methods: PaymentMethod[]
}

const initialState = {
    payment_methods: []
}

export const paymentMethodSlice = createSlice({
    name: "payment_method",
    initialState,
    reducers: {
        updatePaymentMethodState(state, { payload }: PayloadAction<Partial<PaymentMethodState>>) {
            console.log("PAYMENT METHOD STATE UPDATED", payload)
            Object.assign(state, payload);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPaymentMethods.fulfilled, (state, action) => {
            console.log("UPDATING THE STATE RIGHT", action.payload)
            Object.assign(state, action.payload);
        })
    }
})

export const fetchPaymentMethods = createAsyncThunk(
    "payment_method/fetch",
    async () => {
        const res = await axios.get(`http://localhost:3001/api/v1/payment/get-payment-methods`, { withCredentials: true } )
        console.log("payment method data is", res.data)    
        return res.data;
    }
)

export const { updatePaymentMethodState } = paymentMethodSlice.actions;
export default paymentMethodSlice.reducer;