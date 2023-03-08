import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const ProductAdd = () => {
  const [type, setType] = useState("dvd");
  const navigate = useNavigate();

  const dvdSpecific = (
    <div className="form-group row mt-4">
      <label htmlFor="size" className="col-sm-2 col-form-label">
        Size (MB)
      </label>
      <div className="col-sm-10">
        <input type="text" className="form-control" id="size" placeholder="" />
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
            className="form-control"
            id="height"
            name="height"
            required
          />
        </div>
      </div>
      <div className="form-group row mt-4">
        <label htmlFor="width" className="col-sm-2 col-form-label">
          Width (CM)
        </label>
        <div className="col-sm-10">
          <input
            type="number"
            className="form-control"
            id="width"
            name="width"
          />
        </div>
      </div>
      <div className="form-group row mt-4">
        <label htmlFor="length" className="col-sm-2 col-form-label">
          Length (CM)
        </label>
        <div className="col-sm-10">
          <input
            type="number"
            className="form-control"
            id="length"
            name="length"
          />
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
          className="form-control"
          id="weight"
          placeholder=""
        />
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
    const data = new FormData(e.target);
    console.log(data);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    };
    fetch("http://127.0.0.1:8000/products/create", requestOptions).then(
      (response) => {
        if (response.ok) {
          navigate("/");
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
                className="form-control"
                id="sku"
                name="sku"
                required={true}
              />
            </div>
          </div>
          <div className="form-group row mt-4">
            <label htmlFor="name" className="col-sm-2 col-form-label">
              NAME
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
              />
            </div>
          </div>
          <div className="form-group row mt-4">
            <label htmlFor="price" className="col-sm-2 col-form-label">
              PRICE ($)
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="price"
                name="price"
                required
              />
            </div>
          </div>
          <div className="form-group row mt-4">
            <label htmlFor="productType" className="col-sm-2 col-form-label">
              Type Switcher
            </label>
            <div className="col-sm-10">
              <select
                className="form-select"
                id="productType"
                onChange={(e) => setType(e.target.value)}
                name="type"
              >
                <option value="dvd">DVD</option>
                <option value="book">Book</option>
                <option value="furniture">Furniture</option>
              </select>
            </div>
          </div>
          {typeSpecific}
        </form>
      </div>
    </div>
  );
};

export default ProductAdd;
