import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface SecondStepFormState {
    year: string
    make: string
    model: string
    radio: boolean
    isSubmited: boolean
}

const initialState: SecondStepFormState = {
    year: '',
    make: '',
    model: '',
    radio: false,
    isSubmited: false,
}

export const formSecondSlice = createSlice({
    name: 'form-second',
    initialState,
    reducers: {
        onYearChange: (state, { payload }: PayloadAction<string>) => {
            state.year = payload
        },
        onMakeChange: (state, { payload }: PayloadAction<string>) => {
            state.make = payload
        },
        onModelChange: (state, { payload }: PayloadAction<string>) => {
            state.model = payload
        },
        onRadioTwoChange: (state, { payload }: PayloadAction<boolean>) => {
            state.radio = payload
        },
        onSubmit: (state, { payload }: PayloadAction<boolean>) => {
            state.isSubmited = payload
        },
    },
})

export const {
    onMakeChange,
    onModelChange,
    onRadioTwoChange,
    onYearChange,
    onSubmit,
} = formSecondSlice.actions

export default formSecondSlice.reducer
