import React, { useState } from 'react'
import { useGlobalContext } from '../contex/contex'

const SearchForm = () => {
  const [text, setText] = useState("")
  const { setSearchText } = useGlobalContext();

  const search =(e)=>{
    setText(e.target.value)

  }

  const handleSubmit =(e)=>{
    e.preventDefault()
setSearchText(text);
setText("")
  }
  return (
    <section className='section- search'>
      <form action="" className='search-form' onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search</label>
          <input type="text" id="name" value={text} onChange={search}/>
        </div>
      </form>
    </section>
  )
}

export default SearchForm