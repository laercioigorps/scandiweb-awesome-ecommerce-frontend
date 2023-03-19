import React, { useState, useEffect } from "react";
import { json, Link, useNavigate } from "react-router-dom";

const BACKEND_URL = "https://backend.awesome-scandiweb.shop";

const ProductAdd = () => {
  const [type, setType] = useState("dvd");
  const [errors, setErrors] = useState();
  const navigate = useNavigate();

  const skuErrors =
    errors && errors.sku
      ? errors.sku.map((error, index) => (
          <p key={index} className="text-danger m-0">
            *{error}
          </p>
        ))
      : "";
  const nameErrors =
    errors && errors.name
      ? errors.name.map((error, index) => (
          <p key={index} className="text-danger m-0">
            *{error}
          </p>
        ))
      : "";
  const priceErrors =
    errors && errors.price
      ? errors.price.map((error, index) => (
          <p key={index} className="text-danger m-0">
            *{error}
          </p>
        ))
      : "";
  const typeErrors =
    errors && errors.type
      ? errors.type.map((error, index) => (
          <p key={index} className="text-danger m-0">
            *{error}
          </p>
        ))
      : "";

  const sizeErrors =
    errors && errors.size
      ? errors.size.map((error, index) => (
          <p key={index} className="text-danger m-0">
            *{error}
          </p>
        ))
      : "";

  const weightErrors =
    errors && errors.weight
      ? errors.weight.map((error, index) => (
          <p key={index} className="text-danger m-0">
            *{error}
          </p>
        ))
      : "";

  const heightErrors =
    errors && errors.height
      ? errors.height.map((error, index) => (
          <p key={index} className="text-danger m-0">
            *{error}
          </p>
        ))
      : "";
  const widthErrors =
    errors && errors.width
      ? errors.width.map((error, index) => (
          <p key={index} className="text-danger m-0">
            *{error}
          </p>
        ))
      : "";
  const lengthErrors =
    errors && errors.length
      ? errors.length.map((error, index) => (
          <p key={index} className="text-danger m-0">
            *{error}
          </p>
        ))
      : "";

  const dvdSpecific = (
    <div className="form-group row mt-4 has-validation">
      <label htmlFor="size" className="col-sm-2 col-form-label">
        Size (MB)
      </label>
      <div className="col-sm-10">
        <input
          type="text"
          className={`form-control ${sizeErrors ? "is-invalid" : ""}`}
          id="size"
          name="size"
          placeholder=""
          aria-describedby="sizeFeedback"
        />
        {sizeErrors}
      </div>
      <p className="mt-4">*Please, provide size</p>
    </div>
  );

  const furnitureSpecific = (
    <>
      <div className="form-group row mt-4">
        <label htmlFor="height" className="col-sm-2 col-form-label">
          Height (CM)
        </label>
        <div className="col-sm-10">
          <input
            type="number"
            className={`form-control ${heightErrors ? "is-invalid" : ""}`}
            id="height"
            name="height"
            //required
          />
          {heightErrors}
        </div>
      </div>
      <div className="form-group row mt-4">
        <label htmlFor="width" className="col-sm-2 col-form-label">
          Width (CM)
        </label>
        <div className="col-sm-10">
          <input
            type="number"
            className={`form-control ${widthErrors ? "is-invalid" : ""}`}
            id="width"
            name="width"
          />
          {widthErrors}
        </div>
      </div>
      <div className="form-group row mt-4">
        <label htmlFor="length" className="col-sm-2 col-form-label">
          Length (CM)
        </label>
        <div className="col-sm-10">
          <input
            type="number"
            className={`form-control ${lengthErrors ? "is-invalid" : ""}`}
            id="length"
            name="length"
          />
          {lengthErrors}
        </div>
        <p className="mt-4">*Please, provide dimensions</p>
      </div>
    </>
  );

  const bookSpecific = (
    <div className="form-group row mt-4">
      <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
        Wheight (KG)
      </label>
      <div className="col-sm-10">
        <input
          type="text"
          className={`form-control ${weightErrors ? "is-invalid" : ""}`}
          id="weight"
          name="weight"
          placeholder=""
        />
        {weightErrors}
      </div>
      <p className="mt-4">*Please, provide weight</p>
    </div>
  );

  var typeSpecific =
    type === "dvd"
      ? dvdSpecific
      : type === "furniture"
      ? furnitureSpecific
      : bookSpecific;

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
    fetch(`${BACKEND_URL}/products/create`, requestOptions).then(
      (response) => {
        if (response.ok) {
          navigate("/");
        } else {
          response.json().then((text) => {
            setErrors(text.errors);
            console.log(text.errors);
          });
        }
      }
    );
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
            value="SAVE"
          />
          <Link className="btn btn-danger" to="/">
            CANCEL
          </Link>
        </div>
      </div>
      <div className="row mt-4">
        <form
          onSubmit={handleSubmit}
          acion="#"
          className="col-md-7"
          id="product_form"
        >
          <div className="form-group row">
            <label htmlFor="sku" className="col-sm-2 col-form-label">
              SKU
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className={`form-control ${skuErrors ? "is-invalid" : ""}`}
                id="sku"
                name="sku"
                //required={true}
              />
              {skuErrors}
            </div>
          </div>
          <div className="form-group row mt-4">
            <label htmlFor="name" className="col-sm-2 col-form-label">
              NAME
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className={`form-control ${nameErrors ? "is-invalid" : ""}`}
                id="name"
                name="name"
              />
              {nameErrors}
            </div>
          </div>
          <div className="form-group row mt-4">
            <label htmlFor="price" className="col-sm-2 col-form-label">
              PRICE ($)
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className={`form-control ${priceErrors ? "is-invalid" : ""}`}
                id="price"
                name="price"
                //required
              />
              {priceErrors}
            </div>
          </div>
          <div className="form-group row mt-4">
            <label htmlFor="productType" className="col-sm-2 col-form-label">
              Type Switcher
            </label>
            <div className="col-sm-10">
              <select
                className={`form-select ${typeErrors ? "is-invalid" : ""}`}
                id="productType"
                onChange={(e) => setType(e.target.value)}
                name="type"
              >
                <option value="dvd">DVD</option>
                <option value="book">Book</option>
                <option value="furniture">Furniture</option>
              </select>
              {typeErrors}
            </div>
          </div>
          {typeSpecific}
        </form>
      </div>
    </div>
  );
};

export default ProductAdd;
