"use client"

import { NavbarContext, NavbarContextProps } from "./NavbarContext"
import { useState } from "react"
import { useMemo } from "react"


export default function NavbarContextProvider({children}: {children: React.ReactNode}) {

    const [isBookingPage, setIsBokingPage] = useState(false);
    const [isLoading, setIsLoading] = useState(true);


    const value: NavbarContextProps = useMemo(() => ({
        isBooking: isBookingPage,
        isLoading,
        setIsBooking: setIsBokingPage,
        setIsLoading,
    }), [isBookingPage, setIsBokingPage, isLoading, setIsLoading])

  return (
    <NavbarContext.Provider value={value}>
        {children}
    </NavbarContext.Provider>
  )
}
