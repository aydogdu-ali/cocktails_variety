import React from 'react'
import { useGlobalContext } from '../contex/contex'

const SearchForm = () => {
  const { setSearchText } = useGlobalContext();
  return (
    <div>SearchForm</div>
  )
}

export default SearchForm