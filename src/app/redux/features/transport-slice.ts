import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CommonFormsState {
    wasSubmited: boolean
}

interface TransportSliceState extends CommonFormsState {
    name: string
    email: string
    phoneNumber: string
    extraPhoneNumber?: string
    representation: string
}

const initialState: TransportSliceState = {
    name: '',
    email: '',
    phoneNumber: '',
    representation: 'individual',
    wasSubmited: false,
}

export const transportSlice = createSlice({
    name: 'transport-slice',
    initialState,
    reducers: {
        onEmailChange: (state, { payload }: PayloadAction<string>) => {
            state.email = payload
        },
        onNameChange: (state, { payload }: PayloadAction<string>) => {
            state.name = payload
        },
        onPhoneCnahge: (state, { payload }: PayloadAction<string>) => {
            state.phoneNumber = payload
        },
        onExtraPhoneCnahge: (state, { payload }: PayloadAction<string>) => {
            state.extraPhoneNumber = payload
        },
        onRepresentationChange: (state, { payload }: PayloadAction<string>) => {
            state.representation = payload
        },
        onTransportSubmited: (store, { payload }: PayloadAction<boolean>) => {
            store.wasSubmited = payload
        },
    },
})

export const {
    onEmailChange,
    onExtraPhoneCnahge,
    onPhoneCnahge,
    onRepresentationChange,
    onTransportSubmited,
    onNameChange,
} = transportSlice.actions

export default transportSlice.reducer
