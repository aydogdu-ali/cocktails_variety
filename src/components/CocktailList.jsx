import React from 'react'
import { useGlobalContext } from '../contex/contex'
import Cocktail from './Cocktail'
import Loading from './Loading'


const CocktailList = () => {
  const{cocktails, loading} = useGlobalContext()

  // yükleme aşamasında doğruysa yükleniyor gösteriyoruz.
  if(loading){
    return <Loading/>
  }

  if(cocktails.length<1){
    return <h2 className='error'>oops! No match </h2>;
    
  }

  return <section className='section'>
    
    <h2 className='section-title'>
      cocktails
    </h2>
    <div className='cocktails-center'>

      {cocktails.map((item)=>{
        return <Cocktail key = {item.id} {...item}/>
      })}

    </div>
    </section>;
}

export default CocktailList