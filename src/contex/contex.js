import { createContext } from "react";
import { useContext, useState } from "react";

// const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?='

export const AppContext = createContext()

export const AppProvider = ({children})=>{
    const [login, setLogin] = useState(null)
    const [searchText, setSearchText] = useState("a")
    const [loading, setLoading] = useState(true)
    const [cocktails, setCocktails] = useState([])
    
    return (
      <AppContext.Provider
        value={{
          login,
          searchText,
          loading,
          cocktails,
          setSearchText,
          setLoading,
          setCocktails,
          setLogin,
        }}
      >
        {children}
      </AppContext.Provider>
    );


    
}

export const useGlobalContext = () => {
  return useContext(AppContext);
};