'use client'

import { useNavbarContext } from "@/app/context/NavbarContext/NavbarContext";
import { useEffect } from "react";

export const NavbarControl= () => {
    const {isLoading, setIsLoading} = useNavbarContext();
    useEffect(() => {
        if(isLoading) {
            setIsLoading(false);
        }
    }, [ isLoading, setIsLoading])
  return null;
}
