import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { calculateCost } from '../thunks/calculate-cost'

export interface FormState {
    isLoading: boolean
    isError?: string
    canBeCalculated: boolean
    distance: number // in miles
    duration: number // in hours
    price: string // in $
    transportTypeTax: string
    id: number | null
}

export interface CalcPricePayloadState {
    distance: number
    duration: number
    price: string
    transportTypeTax: string
    id: number
}

export interface NoRouteError {
    code: string
    message: string
}

const initialState: FormState = {
    isLoading: false,
    isError: undefined,
    canBeCalculated: false,
    distance: 0,
    duration: 0,
    price: '',
    transportTypeTax: '',
    id: null,
}

export const formSlice = createSlice({
    name: 'form-calculator',
    initialState,
    reducers: {
        enableCalculation: (state) => {
            state.canBeCalculated = true
        },
        onPriceChange: (state, { payload }) => {
            state.price = payload
        },
    },
    extraReducers(builder) {
        builder
            .addCase(calculateCost.pending, (state) => {
                state.isLoading = true
            })
            .addCase(
                calculateCost.fulfilled,
                (state, { payload }: PayloadAction<CalcPricePayloadState>) => {
                    state.isLoading = false
                    state.distance = payload.distance
                    state.duration = payload.duration
                    state.price = payload.price
                    state.transportTypeTax = payload.transportTypeTax
                    state.id = payload.id
                }
            )
            .addCase(
                calculateCost.rejected,
                (
                    state,
                    { payload }: PayloadAction<NoRouteError | undefined>
                ) => {
                    state.isLoading = false
                    if (payload) {
                        state.isError = `code: ${payload.code} \n ${payload.message}`
                    }
                }
            )
    },
})

export const { enableCalculation, onPriceChange } = formSlice.actions

export default formSlice.reducer
