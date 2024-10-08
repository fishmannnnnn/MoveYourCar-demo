import { toast } from 'react-toastify'

export const sendFormOrder = async ({
    conditions,
    distance,
    firstAvailDate,
    from,
    id,
    price,
    to,
    transportType,
    vechicle,
    email,
    date,
    phone,
}: any) => {
    const requset = {
        formType: 'main',
        from,
        price,
        distance,
        to,
        id,
        conditions,
        firstAvailDate,
        transportType,
        vechicle,
        email,
        date,
        phone,
    }
    await fetch('/api/form/send-partial', {
        method: 'POST',
        body: JSON.stringify(requset),
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
    }).catch(() =>
        toast("Could'n send the form", {
            position: 'bottom-right',
            hideProgressBar: true,
            type: 'error',
        })
    )
}
