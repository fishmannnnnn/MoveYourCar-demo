import { configureStore } from '@reduxjs/toolkit'
import formSlice from './features/form-slice'
import formFirstStepSlice from './features/form-first-step-slice'
import formSecondStepSlice from './features/form-second-step-slice'
import formThirdStepSlice from './features/form-third-step-slice'
import transportSlice from './features/transport-slice'
import pickupSlice from './features/pickup-slice'
import deliverySlice from './features/delivery-slice'

export const formStore = () => {
    return configureStore({
        reducer: {
            formSlice,
            formFirstStepSlice,
            formSecondStepSlice,
            formThirdStepSlice,
            transport: transportSlice,
            pickup: pickupSlice,
            delivery: deliverySlice,
        },
    })
}

export type AppStore = ReturnType<typeof formStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
