import { createContext, useContext } from "react";

export interface NavbarContextProps {
    isBooking: boolean;
    isLoading: boolean;
    setIsBooking: (val: boolean) => void;
    setIsLoading: (val: boolean) => void;
}


const NavbarContextInitialValue: NavbarContextProps = {
    isBooking: false,
    isLoading: true,
    setIsBooking: () => {},
    setIsLoading: () => {},
};


export const NavbarContext = createContext<NavbarContextProps>(NavbarContextInitialValue);


export const useNavbarContext = () => {
    return useContext(NavbarContext);

}