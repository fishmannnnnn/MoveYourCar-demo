'use client'

import { useRef } from 'react'
import { Provider } from 'react-redux'
import { AppStore, formStore } from '../redux/store'

interface ReduxFormProviderProps {
    children: React.ReactNode
}

const ReduxFormProvider = ({ children }: ReduxFormProviderProps) => {
    const storeRef = useRef<AppStore>()

    if (!storeRef.current) {
        storeRef.current = formStore()
    }

    return <Provider store={storeRef.current}>{children}</Provider>
}

export default ReduxFormProvider
