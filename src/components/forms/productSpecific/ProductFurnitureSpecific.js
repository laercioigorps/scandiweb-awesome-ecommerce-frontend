import React from "react";

const ProductFurnitureSpecific = (props) => {

  function getErrors(field) {
    return props.errors && field
      ? field.map((error, index) => (
          <p key={index} className="text-danger m-0">
            *{error}
          </p>
        ))
      : "";
  }

  const heightErrors = props.errors ? getErrors(props.errors.height) : "";
  const widthErrors = props.errors ? getErrors(props.errors.width) : "";
  const lengthErrors = props.errors ? getErrors(props.errors.length) : "";

  return (
    <>
      <div className="form-group row mt-4">
        <label htmlFor="height" className="col-sm-2 col-form-label">
          Height (CM)
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className={`form-control ${heightErrors ? "is-invalid" : ""}`}
            id="height"
            name="height"
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
            type="text"
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
            type="text"
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
};

export default ProductFurnitureSpecific;
