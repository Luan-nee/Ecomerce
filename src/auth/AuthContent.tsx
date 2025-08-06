import { createContext, useContext } from "react";

interface AuthContenxtType{
    isAuthenticated: boolean,
    setIsAuthenticated: (valor:boolean)=>void
}

export const AuthContenxt = createContext<AuthContenxtType|null>(null)

export const useAuth = ()=>{
    const context = useContext(AuthContenxt);
    if(!context){
        throw new Error("Use auth error ");
    }
    return context;
};