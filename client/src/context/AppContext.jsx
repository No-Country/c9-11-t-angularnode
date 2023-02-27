import { appReducer } from "./reducers/appReducer";
import { createContext, useContext, useReducer } from "react";


const AppContext = createContext(); 

export const useAppContext = () => useContext(AppContext);

const initialState = {
    isLoading: false,
    hasChanges: false,
    categories: []
}

export const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(appReducer,initialState);

    return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};




