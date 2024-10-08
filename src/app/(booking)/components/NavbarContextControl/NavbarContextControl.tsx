'use client'

import { useNavbarContext } from "@/app/context/NavbarContext/NavbarContext";
import { useEffect } from "react";

export const NavbarContextControl = () => {
    const {setIsBooking} = useNavbarContext();
    useEffect(() => {
        setIsBooking(true);
        return () => setIsBooking(false);
    }, [setIsBooking])
  return null;
}
