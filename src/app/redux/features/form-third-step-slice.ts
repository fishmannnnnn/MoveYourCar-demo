import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface FormThirdState {
    email: string
    date: string
    phone: string
    isSubmited: boolean
}

const initialState: FormThirdState = {
    email: '',
    date: '',
    phone: '',
    isSubmited: false,
}

export const formThirdSlice = createSlice({
    name: 'form-third',
    initialState,
    reducers: {
        onEmailChange: (state, { payload }: PayloadAction<string>) => {
            state.email = payload
        },
        onPhoneChange: (state, { payload }: PayloadAction<string>) => {
            state.phone = payload
        },
        onDateChange: (state, { payload }: PayloadAction<string>) => {
            state.date = payload
        },
        onSubmit: (state, { payload }: PayloadAction<boolean>) => {
            state.isSubmited = payload
        },
    },
})

export const { onDateChange, onEmailChange, onPhoneChange, onSubmit } =
    formThirdSlice.actions

export default formThirdSlice.reducer
