import { useDispatch, useSelector, useStore } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import type { RootState, AppDispatch, AppStore } from '../store'
import { createSelector } from '@reduxjs/toolkit'
import { Delivery } from '../features/form-first-step-slice'

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppStore: () => AppStore = useStore

const SelectTransport = (state: RootState) => state.transport
const SelectPickup = (state: RootState) => state.pickup
const SelectDelivery = (state: RootState) => state.delivery
const SelectFirstStepFormData = (state: RootState) => state.formFirstStepSlice
const SelectSecondStepFormData = (state: RootState) => state.formSecondStepSlice
const SelectThirdStepFormData = (state: RootState) => state.formThirdStepSlice
const SelectFormData = (state: RootState) => state.formSlice
const SelectVechicleInfoData = (state: RootState) => state.formSecondStepSlice

const selectIsTransportSubmited = createSelector(
    SelectTransport,
    (state) => state.wasSubmited
)
const selectIsPickupSubmited = createSelector(
    SelectPickup,
    (state) => state.wasSubmited
)
const selectIsDeliverySubmited = createSelector(
    SelectDelivery,
    (state) => state.wasSubmited
)

const selectIsFirstSubmited = createSelector(
    SelectFirstStepFormData,
    (state) => state.isSubmited
)
const selectIsSecondSubmited = createSelector(
    SelectSecondStepFormData,
    (state) => state.isSubmited
)
const selectIsThirdSubmited = createSelector(
    SelectThirdStepFormData,
    (state) => state.isSubmited
)

const selectFromAndToData = createSelector(
    SelectFirstStepFormData,
    (state) => ({ from: state.deliveryFrom, to: state.deliveryTo })
)

const selectIsPriceCalculating = createSelector(
    SelectFormData,
    (state) => state.isLoading
)

interface SelectVehicleInfoReturnValue {
    vehicle: string
}

export const selectVehicleInfo = createSelector(
    SelectVechicleInfoData,
    (state): SelectVehicleInfoReturnValue => {
        const { make, model, year } = state

        const vehicle = make + ' ' + model + ' ' + year
        return {
            vehicle,
        }
    }
)

interface FormsSubmited {
    transport: boolean
    pickup: boolean
    delivery: boolean
}

interface ThirdStepFormData {
    isLoading: boolean
    from: Partial<Omit<Delivery, 'zipCode, cityName'>>
    to: Partial<Omit<Delivery, 'zipCode, cityName'>>
}

export const selectIsFormSubmited = createSelector(
    [
        selectIsTransportSubmited,
        selectIsPickupSubmited,
        selectIsDeliverySubmited,
    ],
    (transport, pickup, delivery): FormsSubmited => {
        return {
            transport,
            pickup,
            delivery,
        }
    }
)

export const selectIsAllFormsSubmited = createSelector(
    [
        selectIsTransportSubmited,
        selectIsPickupSubmited,
        selectIsDeliverySubmited,
        selectIsFirstSubmited,
        selectIsSecondSubmited,
        selectIsThirdSubmited,
    ],
    (
        transport,
        pickup,
        delivery,
        first,
        second,
        third
    ): { isSubmited: boolean } => {
        return {
            isSubmited:
                transport && pickup && delivery && first && second && third,
        }
    }
)

export const getThridFormDataSelector = createSelector(
    [selectFromAndToData, selectIsPriceCalculating],
    (deliveryData, isLoading): ThirdStepFormData => {
        return {
            from: deliveryData.from,
            to: deliveryData.to,
            isLoading: isLoading,
        }
    }
)
