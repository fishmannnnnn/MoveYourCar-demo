import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PickupSliceState } from './pickup-slice'

interface DeliverySliceState extends PickupSliceState {
    specialInsctructions?: string
}

const initialState: DeliverySliceState = {
    streetAddress: '',
    streetDetails: '',
    representation: 'Residential business',
    whoToContact: 'Contact me',
    wasSubmited: false,
}

export const deliverypSlice = createSlice({
    name: 'delivery-slice',
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
        onSpecialInsctuctionsChange: (
            state,
            { payload }: PayloadAction<string>
        ) => {
            state.specialInsctructions = payload
        },
        onDeliverySubmited: (store, { payload }: PayloadAction<boolean>) => {
            store.wasSubmited = payload
        },
    },
})

export const {
    onStreetAddressChange,
    onStreetDetailsChange,
    onWhoToContactChange,
    onRepresentationChange,
    onDeliverySubmited,
    onSpecialInsctuctionsChange,
} = deliverypSlice.actions

export default deliverypSlice.reducer
