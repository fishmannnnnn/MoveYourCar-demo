import { ClientFormPayment } from '@/components/email-templates/EmailPayment'
import { toast } from 'react-toastify'

export const sendFormPayment = async (data: ClientFormPayment) => {
    await fetch('/api/form/send-all', {
        method: 'POST',
        body: JSON.stringify(data),
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
