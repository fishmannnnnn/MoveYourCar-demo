import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Delivery = {
    zipCode: string
    cityName: string
    longitude: number
    latitude: number
}

interface FirstStepFormState {
    fromDisplayName: string
    toDisplayName: string
    deliveryFrom: Delivery
    deliveryTo: Delivery
    radio: boolean
    isSubmited: boolean
}

const initialState: FirstStepFormState = {
    fromDisplayName: '',
    toDisplayName: '',
    deliveryFrom: {
        latitude: 0,
        cityName: '',
        longitude: 0,
        zipCode: '',
    },
    deliveryTo: {
        latitude: 0,
        cityName: '',
        longitude: 0,
        zipCode: '',
    },
    radio: false,
    isSubmited: false,
}

export const formFirstSlice = createSlice({
    name: 'form-first',
    initialState,
    reducers: {
        onFromDisplayNameChange: (
            state,
            { payload }: PayloadAction<string>
        ) => {
            state.fromDisplayName = payload
        },
        onToDisplayNameChange: (state, { payload }: PayloadAction<string>) => {
            state.toDisplayName = payload
        },
        onFromChange: (state, { payload }: PayloadAction<Delivery>) => {
            state.deliveryFrom = { ...payload }
        },
        onToChange: (state, { payload }: PayloadAction<Delivery>) => {
            state.deliveryTo = { ...payload }
        },
        onRadioChange: (state, { payload }: PayloadAction<boolean>) => {
            state.radio = payload
        },
        onSubmit: (state, { payload }: PayloadAction<boolean>) => {
            state.isSubmited = payload
        },
    },
})

export const {
    onFromChange,
    onToChange,
    onRadioChange,
    onFromDisplayNameChange,
    onToDisplayNameChange,
    onSubmit,
} = formFirstSlice.actions

export default formFirstSlice.reducer
