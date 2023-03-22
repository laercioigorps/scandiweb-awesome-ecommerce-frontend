import React, { useState } from "react";
import ProductBookSpecific from "./productSpecific/ProductBookSpecific";
import ProductDVDSpecific from "./productSpecific/ProductDVDSpecific";
import ProductFurnitureSpecific from "./productSpecific/ProductFurnitureSpecific";

const ProductForm = (props) => {
  const [type, setType] = useState("");

  function getErrors(field) {
    return props.errors && field
      ? field.map((error, index) => (
          <p key={index} className="text-danger m-0">
            *{error}
          </p>
        ))
      : "";
  }

  const skuErrors = props.errors ? getErrors(props.errors.sku) : "";
  const nameErrors = props.errors ? getErrors(props.errors.name) : "";
  const priceErrors = props.errors ? getErrors(props.errors.price) : "";
  const typeErrors = props.errors ? getErrors(props.errors.type) : "";

  var typeSpecific =
    type === "dvd" ? (
      <ProductDVDSpecific errors={props.errors} />
    ) : type === "furniture" ? (
      <ProductFurnitureSpecific errors={props.errors} />
    ) : type === "book" ?(
      <ProductBookSpecific errors={props.errors} />
    ) :
      "";

  return (
    <form
      onSubmit={props.onSubmit}
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
            <option id="" value="">
              Type Switcher 
            </option>
            <option id="DVD" value="dvd">
              DVD
            </option>
            <option id="Book" value="book">
              Book
            </option>
            <option id="Furniture" value="furniture">
              Furniture
            </option>
          </select>
          {typeErrors}
        </div>
      </div>
      {typeSpecific}
    </form>
  );
};

export default ProductForm;
