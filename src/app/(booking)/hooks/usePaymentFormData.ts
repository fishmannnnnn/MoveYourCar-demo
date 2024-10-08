import { selectVehicleInfo, useAppSelector } from '@/app/redux/hooks'
import { ClientFormPayment } from '@/components/email-templates/EmailPayment'

export const usePaymentFormData = (): ClientFormPayment => {
    const {
        formFirstStepSlice,
        formSecondStepSlice,
        formSlice,
        transport,
        formThirdStepSlice,
        delivery,
        pickup,
    } = useAppSelector((state) => state)

    const { vehicle } = useAppSelector(selectVehicleInfo)

    const dateOfPayment = new Date().toLocaleDateString()
    const firtsAvailDate = new Date().toLocaleDateString()

    const formRequestObject: ClientFormPayment = {
        vechicle: vehicle,
        distance: formSlice.distance.toString(),
        price: formSlice.price,
        from: formFirstStepSlice.fromDisplayName,
        to: formFirstStepSlice.toDisplayName,
        transportType: formFirstStepSlice.radio ? 'open' : 'enclosed',
        conditions: formSecondStepSlice.radio ? 'operable' : 'non-operable',
        id: formSlice.id?.toString()!,
        dateOfPayment: dateOfPayment,
        name: transport.name,
        firstAvailDate: firtsAvailDate,
        email: formThirdStepSlice.email,
        date: formThirdStepSlice.date,
        extraPhone: transport.extraPhoneNumber,
        representation: transport.representation,
        phone: formThirdStepSlice.phone,
        delivery: {
            address: delivery.streetAddress,
            details: delivery.streetDetails,
            representation: delivery.representation,
            specialInstruction: delivery.specialInsctructions,
            whoToContact: delivery.whoToContact,
        },
        pickup: {
            address: pickup.streetAddress,
            details: pickup.streetDetails,
            representation: pickup.representation,
            whoToContact: pickup.whoToContact,
        },
    }

    return formRequestObject
}
