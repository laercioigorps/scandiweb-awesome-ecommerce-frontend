import React, { useState, useEffect } from 'react';

const Home = () => {
  const [data, setData] = useState();

  useEffect(() => {
    // fetch data
    const dataFetch = async () => {
      const data = await (
        await fetch(
          "http://127.0.0.1:8000/products"
        )
      ).json();
      
      // set state when the data received
      setData(data);
      if(data){
        console.log(data)
      }
      
    };

    dataFetch();
  }, []);

  const listItems = data ? data.map(
    (product) => (
      <div className='col-md-3' key={product.sku}>
      <div className="card m-4">
        <div className="card-body">
          <div><input type='checkbox' className="delete-checkbox"></input></div>
          <p className="card-text text-center mb-0">{product.sku}</p>
          <p className="card-text text-center mb-0">{product.name}</p>
          <p className="card-text text-center mb-0">{product.price} $</p>
          <p className="card-text text-center mb-0">
            {Object.keys(product.type_specific)[0]}: {product.type_specific[Object.keys(product.type_specific)[0]]}
            </p>
        </div>
      </div>
      </div>
    )
  ) : ''

  return (
  <div className="container">
    <div className="row mt-2">
      <div className="col-md-10"><h1 className="">Product List</h1></div>
      <div className="col-md-2">
        <input className="me-2" type="button" value="ADD"/>
        <input type="button" value="MASS DELETE"/>
      </div>
    </div>
    <div className="row">{listItems}</div>
    
  </div>)
}

export default Home;