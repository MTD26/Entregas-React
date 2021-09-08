import {useState, createContext, useContext, Children} from 'react'

export const AppContext = createContext()

export const useAppContext = () => useContext(AppContext)

function AppContextProvider({Children}){
    <AppContextProvider>
        {Children}
    </AppContextProvider>
}