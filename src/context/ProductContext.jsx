import { createContext, useContext } from "react";

const productContext = createContext()


export const AppProvider = ({children})=>{
return <productContext.Provider value={'Dhamala'}>{children}</productContext.Provider>
}


export const customContextProvider = ()=>{
    return useContext(productContext);
}