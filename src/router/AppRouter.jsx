import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "../components/Navbar"
import About from '../pages/About';
import Error from '../pages/Error';

import Home from "../pages/Home"
import SingleCocktail from '../pages/SingleCocktail';

// Bu komponenti App.js dosyası kullanacağım için Router işlemlerini bu componentte yaptım.
const AppRouter = () => {
  return (
    <BrowserRouter>
    {/*Her sayfada göstereceğim componenetleri Routes'un üst kısmına yazıyorum.*/}
    
   
    <Navbar/>
      <Routes>
<Route path = "/" element ={<Home/>}/>
<Route path = "/about" element ={<About/>}></Route>
<Route path = "/coctail/:id" element ={<SingleCocktail/>}></Route>

<Route path = "*" element ={<Error/>}></Route>
{/*PrivateRouter ile kullanıcı girişi varsa Detail Sayasını görebilecek yoksa login olması gerektiği için logine yönlendirdim.*/}
{/* <Route path = "/about" element ={<PrivateRouter/>}>
<Route path = "" element ={<About/>}/>
</Route>
<Route path = "/detail" element ={<PrivateRouter/>}>
<Route path = "" element ={<Detail/>}/>

  </Route>
<Route path = "/login" element ={<Login/>}/>

<Route path = "/register" element ={<Register/>}/> */}

      </Routes>

    </BrowserRouter>
  )
}

export default AppRouter

