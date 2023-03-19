import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const BACKEND_URL = "https://backend.awesome-scandiweb.shop";

const Home = () => {
  const [data, setData] = useState();
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();

  const dataFetch = async () => {
    const data = await (await fetch(`${BACKEND_URL}/products`)).json();

    // set state when the data received
    setData(data);
    setLoaded(true);
    if (data) {
      console.log(data);
    }
  };

  useEffect(() => {
    if (!loaded) {
      dataFetch();
    }
    // fetch data
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    var products_id = [];
    const myForm = new FormData(e.target);
    myForm.forEach((value, key) => {
      products_id.push(value);
    });
    const json = JSON.stringify({ products_id: products_id });
    console.log(json);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: json,
    };
    fetch(`${BACKEND_URL}/products/delete`, requestOptions).then(
      (response) => {
        if (response.ok) {
          dataFetch();
        } else {
          console.log(response);
        }
      }
    );
  };

  const listItems = data
    ? data.map((product) => (
        <div className="col-md-3" key={product.id}>
          <div className="card m-4">
            <div className="card-body">
              <div>
                <input
                  type="checkbox"
                  className="delete-checkbox"
                  value={product.id}
                  name="product"
                ></input>
              </div>
              <p className="card-text text-center mb-0">{product.sku}</p>
              <p className="card-text text-center mb-0">{product.name}</p>
              <p className="card-text text-center mb-0">{product.price} $</p>
              <p className="card-text text-center mb-0">
                {Object.keys(product.type_specific)[0]}:{" "}
                {product.type_specific[Object.keys(product.type_specific)[0]]}
              </p>
            </div>
          </div>
        </div>
      ))
    : "";

  return (
    <div className="container">
      <div className="row mt-2">
        <div className="col-md-10">
          <h1 className="">Product List</h1>
        </div>
        <div className="col-md-2">
          <Link className="btn btn-primary me-2" to="/add-product">
            ADD
          </Link>
          <input
            className="btn btn-danger"
            type="submit"
            form="delete-form"
            value="MASS DELETE"
          />
        </div>
      </div>
      <form id="delete-form" onSubmit={handleSubmit}>
        <div className="row">{listItems}</div>
      </form>
    </div>
  );
};

export default Home;
