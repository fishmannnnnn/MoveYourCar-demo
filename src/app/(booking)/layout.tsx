import { PriceTable } from '@/components/price-table/PriceTable'
import { BookingNavbar } from './components/BookingNavbar/BookingNavbar'
import { NavbarContextControl } from './components/NavbarContextControl/NavbarContextControl'
import { FormSubmitedProvider } from '@/components/FormSubmitedProvider/FormSubmitedProvider'

export default function BookingLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <>
            <BookingNavbar />
            <main style={{ minHeight: '100dvh' }}>
                {/* <FormSubmitedProvider> */}
                {children}
                <PriceTable />
                {/* </FormSubmitedProvider> */}
            </main>
            <NavbarContextControl />
        </>
    )
}
