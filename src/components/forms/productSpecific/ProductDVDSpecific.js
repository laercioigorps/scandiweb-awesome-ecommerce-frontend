import React from "react";

const ProductDVDSpecific = (props) => {
  function getErrors(field) {
    return props.errors && field
      ? field.map((error, index) => (
          <p key={index} className="text-danger m-0">
            *{error}
          </p>
        ))
      : "";
  }

  const sizeErrors = props.errors ? getErrors(props.errors.size) : "";

  return (
    <>
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
    </>
  );
};

export default ProductDVDSpecific;
