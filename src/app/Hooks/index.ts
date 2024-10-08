import {
    selectIsFormSubmited,
    useAppDispatch,
    useAppSelector,
} from '@/app/redux/hooks'
import { ChangeEvent, useCallback, useState } from 'react'
import {
    Delivery,
    onFromChange,
    onFromDisplayNameChange,
    onRadioChange,
    onSubmit,
    onToChange,
    onToDisplayNameChange,
} from '../redux/features/form-first-step-slice'
import {
    onMakeChange,
    onModelChange,
    onRadioTwoChange,
    onYearChange,
} from '../redux/features/form-second-step-slice'
import {
    onDateChange,
    onEmailChange,
    onPhoneChange,
} from '../redux/features/form-third-step-slice'
import { toast } from 'react-toastify'

interface UseFirstStepReturnValue {
    data: {
        from: string
        to: string
        radio: boolean
    }
    eventHandlers: {
        handleFrom: (val: string | ChangeEvent<HTMLInputElement>) => void
        handleTo: (val: string | ChangeEvent<HTMLInputElement>) => void
        handleRadio: (val: boolean) => void
        handleSubmit: (val: Delivery, val2: Delivery) => void
    }
}

export const useFirstStep = (): UseFirstStepReturnValue => {
    const { fromDisplayName, toDisplayName, radio } = useAppSelector(
        (state) => state.formFirstStepSlice
    )
    const dispatch = useAppDispatch()

    const handleDeliveryFrom = useCallback(
        (val: string | ChangeEvent<HTMLInputElement>) => {
            if (typeof val === 'string') {
                dispatch(onFromDisplayNameChange(val))
            } else dispatch(onFromDisplayNameChange(val.target.value))
        },
        [dispatch]
    )

    const handleDeliveryTo = useCallback(
        (val: string | ChangeEvent<HTMLInputElement>) => {
            if (typeof val === 'string') {
                dispatch(onToDisplayNameChange(val))
            } else dispatch(onToDisplayNameChange(val.target.value))
        },
        [dispatch]
    )

    const handleRadio = useCallback(
        (val: boolean) => {
            dispatch(onRadioChange(val))
        },
        [dispatch]
    )

    const handleSubmit = (valFrom: Delivery, valTo: Delivery) => {
        dispatch(onFromChange(valFrom))
        dispatch(onToChange(valTo))
        dispatch(onSubmit(true))
    }

    return {
        data: {
            from: fromDisplayName,
            to: toDisplayName,
            radio,
        },
        eventHandlers: {
            handleFrom: handleDeliveryFrom,
            handleTo: handleDeliveryTo,
            handleRadio,
            handleSubmit,
        },
    }
}

interface UseSecondStepReturnValue {
    data: {
        make: string
        model: string
        radio: boolean
        year: string
    }
    eventHandlers: {
        handleMake: (str: ChangeEvent<HTMLInputElement> | string) => void
        handleModel: (str: ChangeEvent<HTMLInputElement> | string) => void
        handleRadio: (val: boolean) => void
        handleYear: (str: ChangeEvent<HTMLInputElement> | string) => void
    }
}

export const useSecondStep = (): UseSecondStepReturnValue => {
    const { make, model, radio, year } = useAppSelector(
        (state) => state.formSecondStepSlice
    )
    const dispatch = useAppDispatch()

    const handleModel = useCallback(
        (e: ChangeEvent<HTMLInputElement> | string) => {
            if (typeof e === 'string') {
                dispatch(onModelChange(e))
            } else {
                const { target } = e
                dispatch(onModelChange(target.value))
            }
        },
        [dispatch]
    )

    const handleMake = useCallback(
        (e: ChangeEvent<HTMLInputElement> | string) => {
            if (typeof e === 'string') {
                dispatch(onMakeChange(e))
            } else {
                const { target } = e
                dispatch(onMakeChange(target.value))
            }
        },
        [dispatch]
    )

    const handleRadio = useCallback(
        (val: boolean) => {
            dispatch(onRadioTwoChange(val))
        },
        [dispatch]
    )

    const handleYear = useCallback(
        (e: ChangeEvent<HTMLInputElement> | string) => {
            if (typeof e === 'string') {
                dispatch(onYearChange(e))
            } else {
                const { target } = e
                dispatch(onYearChange(target.value))
            }
        },
        [dispatch]
    )

    return {
        data: {
            make,
            model,
            year,
            radio,
        },
        eventHandlers: {
            handleMake,
            handleModel,
            handleRadio,
            handleYear,
        },
    }
}

interface UseThirdStepReturnValue {
    data: {
        email: string
        phone: string
        date: string
    }
    eventHandlers: {
        handleEmail: (str: ChangeEvent<HTMLInputElement> | string) => void
        handlePhone: (str: ChangeEvent<HTMLInputElement> | string) => void
        handleDate: (str: ChangeEvent<HTMLInputElement> | string) => void
    }
}

export const useThirdStep = (): UseThirdStepReturnValue => {
    const { date, email, phone } = useAppSelector(
        (state) => state.formThirdStepSlice
    )
    const dispatch = useAppDispatch()

    const handleEmail = useCallback(
        (e: ChangeEvent<HTMLInputElement> | string) => {
            if (typeof e === 'string') {
                dispatch(onEmailChange(e))
            } else {
                const { target } = e
                dispatch(onEmailChange(target.value))
            }
        },
        [dispatch]
    )

    const handlePhone = useCallback(
        (e: ChangeEvent<HTMLInputElement> | string) => {
            if (typeof e === 'string') {
                dispatch(onPhoneChange(e))
            } else {
                const { target } = e
                dispatch(onPhoneChange(target.value))
            }
        },
        [dispatch]
    )

    const handleDate = useCallback(
        (e: ChangeEvent<HTMLInputElement> | string) => {
            if (typeof e === 'string') {
                dispatch(onDateChange(e))
            } else {
                const { target } = e
                dispatch(onDateChange(target.value))
            }
        },
        [dispatch]
    )

    return {
        data: {
            date,
            email,
            phone,
        },
        eventHandlers: {
            handleDate,
            handleEmail,
            handlePhone,
        },
    }
}

interface useSendFormProps {
    isAll?: boolean
    price?: number
}

export const useSendForm = ({ isAll, price }: useSendFormProps) => {
    const first = useAppSelector((state) => state.formFirstStepSlice)
    const second = useAppSelector((state) => state.formSecondStepSlice)
    const third = useAppSelector((state) => state.formThirdStepSlice)
    const transport = useAppSelector((state) => state.transport)
    const pickup = useAppSelector((state) => state.pickup)
    const delivery = useAppSelector((state) => state.delivery)
    const form = useAppSelector((state) => state.formSlice)
    const [isLoading, setIsLoading] = useState(false)

    const requset = {
        formType: 'main',
        from: first.fromDisplayName,
        price: form.price,
        distance: form.distance,
        to: first.toDisplayName,
        transport: first.radio ? 'open' : 'enclosed',
        carYear: second.year,
        carMake: second.make,
        carModel: second.model,
        operable: second.radio ? 'operable' : 'non-operable',
        email: third.email,
        date: third.date,
        phone: third.phone,
    }

    const requstFull = {
        from: first.fromDisplayName,
        to: first.toDisplayName,
        transport: first.radio ? 'open' : 'enclosed',
        carYear: second.year,
        carMake: second.make,
        carModel: second.model,
        operable: second.radio ? 'operable' : 'non-operable',
        email: third.email,
        date: third.date,
        phone: third.phone,
        transportData: {
            name: transport.name,
            extraPhone: transport.extraPhoneNumber,
            representation: transport.representation,
        },
        pickupData: {
            streetAddres: pickup.streetAddress,
            streetDetails: pickup.streetDetails,
            representation: pickup.representation,
            whoToContact: pickup.whoToContact,
        },
        deliveryData: {
            streetAddres: delivery.streetAddress,
            streetDetails: delivery.streetDetails,
            representation: delivery.representation,
            whoToContact: delivery.whoToContact,
            specialInsctructions: delivery.specialInsctructions,
        },
        price: price,
    }

    const sendForm = async ({
        price,
        distance,
    }: {
        price?: string
        distance?: number
    }) => {
        setIsLoading(true)
        await fetch('/api/form/send-partial', {
            method: 'POST',
            body: JSON.stringify(
                price && distance
                    ? { ...requset, price: price, distance: distance }
                    : requset
            ),
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        })
            .catch(() =>
                toast("Could'n send the form", {
                    position: 'bottom-right',
                    hideProgressBar: true,
                    type: 'error',
                })
            )
            .finally(() => {
                setIsLoading(false)
            })
    }

    const sendFormAll = async () => {
        setIsLoading(true)
        await fetch('/api/form/send-all', {
            method: 'POST',
            body: JSON.stringify(requstFull),
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        })
            .catch(() =>
                toast(
                    "Could'n send the form, please call a contact phone to get more details. ",
                    {
                        position: 'bottom-right',
                        hideProgressBar: true,
                        type: 'error',
                    }
                )
            )
            .finally(() => {
                setIsLoading(false)
            })
    }

    return {
        sendForm: isAll ? sendFormAll : sendForm,
        isLoading,
    }
}
