import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CommonFormsState } from './transport-slice'

export interface PickupSliceState extends CommonFormsState {
    streetAddress: string
    streetDetails: string
    representation: string
    whoToContact: string
}

const initialState: PickupSliceState = {
    streetAddress: '',
    streetDetails: '',
    representation: 'Residential business',
    whoToContact: 'Contact me',
    wasSubmited: false,
}

export const pickupSlice = createSlice({
    name: 'pickup-slice',
    initialState,
    reducers: {
        onStreetAddressChange: (state, { payload }: PayloadAction<string>) => {
            state.streetAddress = payload
        },
        onStreetDetailsChange: (state, { payload }: PayloadAction<string>) => {
            state.streetDetails = payload
        },
        onRepresentationChange: (state, { payload }: PayloadAction<string>) => {
            state.representation = payload
        },
        onWhoToContactChange: (state, { payload }: PayloadAction<string>) => {
            state.whoToContact = payload
        },
        onPickupSubmited: (store, { payload }: PayloadAction<boolean>) => {
            store.wasSubmited = payload
        },
    },
})

export const {
    onStreetAddressChange,
    onStreetDetailsChange,
    onWhoToContactChange,
    onRepresentationChange,
    onPickupSubmited,
} = pickupSlice.actions

export default pickupSlice.reducer
