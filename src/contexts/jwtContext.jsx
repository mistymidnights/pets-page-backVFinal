import { useState, createContext } from "react";

export const JwtContext = createContext();

export const JwtContextProvider = ({children}) => {
    const [jwt, setJwt] = useState(() => {
       const savedJwt = localStorage.getItem("token");
       return savedJwt || null; 
    });

    const [pet, setPet] = useState(() => {
        const savedPet = localStorage.getItem("pet");
        const initialValue = JSON.parse(savedPet);
        return initialValue || null
    });

    const logout = () => {
        setPet(null);
        setJwt(null);
        localStorage.removeItem("pet");
        localStorage.removeItem("token");
    }

    return <JwtContext.Provider value={{ jwt, setJwt, pet, setPet, logout }} >
        {children}
    </JwtContext.Provider>
};