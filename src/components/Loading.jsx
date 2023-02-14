import React from 'react'
import loading from "../image/loading.svg"

const Loading = () => {
  return (
    <main className='loading'>
      <h2> Loading...</h2>
      <div>
        <img src={loading} alt="loading" className='load-logo'/>
      </div>
    </main>
  );
}

export default Loading