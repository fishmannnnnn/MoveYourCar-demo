import { createAsyncThunk } from '@reduxjs/toolkit'
import { AppDispatch, AppStore, RootState } from '../store'
import { CalcPricePayloadState, NoRouteError } from '../features/form-slice'
import { calcPrice } from '@/helpers/calcPrice'
import { sendFormOrder } from '@/app/(booking)/actions/send-form-order'

interface ThunkProps {
    from: {
        latitude: number
        longitude: number
    }
    to: {
        latitude: number
        longitude: number
    }
}

interface FetchApiReturnValue {
    code: string
    message?: string
    routes?: {
        distance: number
        duration: number
    }[]
}

const createAppAsyncThunk = createAsyncThunk.withTypes<{
    state: RootState
    dispatch: AppDispatch
    rejectValue: NoRouteError
}>()

export const calculateCost = createAppAsyncThunk<
    CalcPricePayloadState,
    ThunkProps
>(
    'form/calculateCost',
    async ({ from, to }, { getState, rejectWithValue }) => {
        const { latitude: latFrom, longitude: longFrom } = from
        const { latitude: latTo, longitude: longTo } = to
        const { formSecondStepSlice, formFirstStepSlice, formThirdStepSlice } =
            getState()

        const data = await fetch(
            `https://router.project-osrm.org/route/v1/driving/${longFrom},${latFrom};${longTo},${latTo}?overview=false`,
            {
                cache: 'no-store',
            }
        )

        if (!data.ok) {
            return rejectWithValue((await data.json()) as NoRouteError)
        }

        const res = (await data.json()) as FetchApiReturnValue

        if (!res.routes || !res.routes.length) {
            return rejectWithValue({
                message: "Can't find any route",
                code: 'No routes',
            })
        }

        const distance = res.routes[0].distance / 1609
        const duration = res.routes[0]?.duration / 60 / 60

        const { radio: isOpened } = formFirstStepSlice
        const { year, radio: inOperation } = formSecondStepSlice
        const { date } = formThirdStepSlice

        const inOperationTax = inOperation
            ? isOpened
                ? 1
                : 1.4
            : isOpened
              ? 0.85
              : 1.2

        const { price, transportTypeTax } = calcPrice(
            distance,
            inOperationTax,
            date,
            year
        )

        const id = Math.floor(
            Math.random() * (20000000 - 10000000 + 1) + 10000000
        )

        await fetch('/api/set-cookies', {
            method: 'POST',
            body: JSON.stringify({ price: price }),
        })

        const vechicle =
            formSecondStepSlice.make +
            ' ' +
            formSecondStepSlice.model +
            ' ' +
            formSecondStepSlice.year

        await sendFormOrder({
            vechicle: vechicle,
            firstAvailDate: new Date().toLocaleDateString(),

            distance: distance.toFixed(2).toString(),
            price: price,
            from: formFirstStepSlice.fromDisplayName,

            to: formFirstStepSlice.toDisplayName,
            transportType: formFirstStepSlice.radio ? 'open' : 'enclosed',
            conditions: formSecondStepSlice.radio ? 'operable' : 'non-operable',
            id: id.toString(),
            email: formThirdStepSlice.email,
            date: formThirdStepSlice.date,
            phone: formThirdStepSlice.phone,
        })

        return {
            distance,
            duration,
            price,
            transportTypeTax,
            id: id,
        }
    },
    {
        condition: (_, { getState }) => {
            const { formSlice } = getState()
            if (!formSlice.canBeCalculated) {
                return false
            }
        },
    }
)
