import React, { useState,useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';

function Home() {

  // const product=[
  //   {name:"mobile", price:"200"},
  //   {name:"shirt", price:"200"},
  //   {name:"jeans", price:"500"}
  // ]
  const [products, setProducts]=useState([])

  const getData= async()=>{
    try{
    const response = await axios.get("https://fakestoreapi.com/products");
    
    console.log(response,"response")
    setProducts(response.data)
  }
  catch(err)
  { 
console.log(err,"err")
    
  }
  }

  useEffect(()=>{
    getData()
  },[])




  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await axios.get('https://fakestoreapi.com/products');
  //       setProducts(response.data);
  //     } catch (err) {
  //       setError('Error fetching products');
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchProducts();
  // }, []);

  return (
    <div className="home-container">
      <Header />
      <main>
        <h1>Welcome to the Home Page!</h1>
        <p>This is a simple home page with a header and footer.</p>



        <h1>Products</h1>
        {/* <button type="button" class="btn btn-primary" onClick={getData}>Cloct to get Product</button>
        */}





<div class="container">
<div class="row">



  
  {products.map((item, index)=>{
  return<>
  <div class="col-3">
  <div class="card">
  <img src={item.image} alt="Avatar" style={{width:"200", height:"200px"}}/>
  <div class="container">
    <h4><b>{item.title}</b></h4> 
    <p>{item.price}</p> 
  </div>
</div>
</div>

  </>
})}
  </div>
</div>









      </main>
      <Footer />
    </div>
  );
}

export default Home;
