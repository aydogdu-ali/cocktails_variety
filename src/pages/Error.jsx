import React from 'react'
import { useNavigate } from 'react-router-dom'

// useNaviget Hook'u yönlendirme amacıyla kullandık.
//Bu örnekte kullanıcı yanlış bir sayfa yönlendiğinde back butonu ile bir önceki sayfaya gelir.
// Bunu alternatif olarak Link ile de yapabilirdik. Ancak aşağıdada görüldüğü gibi direkt sayfaya yönlendirmiş oluruz.

const Error = () => {
    const navigate = useNavigate();
  return (
    <section className=" section error-page">
      <div className="error">
        <h1>Oops! something went wrong please try again </h1>
        <button className="btn btn-primary" onClick={()=> navigate(-1)}>back </button>
        {/* <Link to ="/">back</Link> */}
      </div>
    </section>
  );
}

export default Error