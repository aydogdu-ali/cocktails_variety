import { createContext } from "react";
import { useContext, useState,useEffect } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const AppContext = createContext()

export const AppProvider = ({children})=>{
    const [login, setLogin] = useState(null)
    const [searchText, setSearchText] = useState("a")
    const [loading, setLoading] = useState(true)
    const [cocktails, setCocktails] = useState([])
    
     

    const getDrinks = async ()=>{
      setLoading(true)
      try {
        const response = await fetch(`${url}${searchText}`);
        const data = await response.json();
        console.log(data);
        const {drinks} = data

        if(drinks){
const newCocktails = drinks.map((item)=>{
  /*Data içinde bulunan drinksin içinde olan her bir objedeki veriyi kullanmak için destructuring
   yaptık*/
   const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item;
{/*Api 'den gelen isimleri daha anlaşılır yapmak için array a bu şekilde döndürdük. */}
   return {
     id: idDrink,
     name: strDrink,
     image: strDrinkThumb,
     info: strAlcoholic,
     glass: strGlass,
   };

})

setCocktails(newCocktails)
        }else {
          setCocktails([])
        }setLoading(false)
        
      } catch (error) {
        console.log(error);
        setLoading(false);
      }

    }

useEffect(() => {

 getDrinks();

 
}, [searchText])


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