import React, { useContext } from 'react'
import { useGlobalContext } from '../contex/contex'
import Loading from './Loading'
import Cocktail from "./Cocktail"

const CocktailList = () => {
  const{cocktails, loading} = useGlobalContext()

  // yükleme aşamasında doğruysa yükleniyor gösteriyoruz.
  if(loading){
    return <Loading/>
  }

  if(cocktails.length<1){
    return <h2 className='error'>oops! No match </h2>;
    
  }

  return (
    <div>CockailList</div>
  )
}

export default CocktailList