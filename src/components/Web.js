import React from 'react';
import Header from './Header'
import Banner from './Banner'
import Product from './Product'
import Footer from './Footer'

function Web(){
  return (
    <div className="container">
      <Header />
      <Banner />
      <Product />
     <h1>Bienvenido a nuestro primer proyecto en React</h1>
      <Footer />     
    </div>
  )

}
export default Web;