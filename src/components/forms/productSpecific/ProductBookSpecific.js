import React from "react";

const ProductBookSpecific = (props) => {
  function getErrors(field) {
    return props.errors && field
      ? field.map((error, index) => (
          <p key={index} className="text-danger m-0">
            *{error}
          </p>
        ))
      : "";
  }

  const weightErrors = props.errors ? getErrors(props.errors.weight) : "";

  return (
    <>
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
    </>
  );
};

export default ProductBookSpecific;
