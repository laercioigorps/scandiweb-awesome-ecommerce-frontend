import React, { useState, useEffect } from "react";
import { json, Link, useNavigate } from "react-router-dom";
import ProductForm from "../components/forms/ProductForm";

const BACKEND_URL = "https://backend.awesome-scandiweb.shop";
//const BACKEND_URL = "http://127.0.0.1:8000";

const ProductAdd = () => {
  const [errors, setErrors] = useState();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    console.log("form submited");
    const myForm = new FormData(e.target);
    var object = {};
    myForm.forEach((value, key) => (object[key] = value));
    var json = JSON.stringify(object);
    console.log(json);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: json,
    };
    fetch(`${BACKEND_URL}/products/create`, requestOptions).then((response) => {
      if (response.ok) {
        navigate("/");
      } else {
        response.json().then((text) => {
          setErrors(text.errors);
          console.log(text.errors);
        });
      }
    });
  }

  return (
    <div className="container">
      <div className="row mt-2">
        <div className="col-md-10">
          <h1 className="">Product ADD</h1>
        </div>
        <div className="col-md-2">
          <input
            className="me-2 btn btn-success"
            form="product_form"
            type="submit"
            value="Save"
          />
          <Link className="btn btn-danger" to="/">
            Cancel
          </Link>
        </div>
      </div>
      <div className="row mt-4">
        <ProductForm onSubmit={(e) => handleSubmit(e)} errors={errors} />
      </div>
    </div>
  );
};

export default ProductAdd;
