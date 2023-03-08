import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ProductAdd = () => {
  const [type, setType] = useState("dvd");

  const dvdSpecific = (
    <div class="form-group row mt-4">
      <label for="size" class="col-sm-2 col-form-label">
        Size (MB)
      </label>
      <div class="col-sm-10">
        <input type="text" class="form-control" id="size" placeholder="" />
      </div>
    </div>
  );

  const furnitureSpecific = (
    <>
      <div class="form-group row mt-4">
        <label for="height" class="col-sm-2 col-form-label">
          Height (CM)
        </label>
        <div class="col-sm-10">
          <input
            type="number"
            class="form-control"
            id="height"
            placeholder=""
          />
        </div>
      </div>
      <div class="form-group row mt-4">
        <label for="width" class="col-sm-2 col-form-label">
          Width (CM)
        </label>
        <div class="col-sm-10">
          <input type="number" class="form-control" id="width" placeholder="" />
        </div>
      </div>
      <div class="form-group row mt-4">
        <label for="length" class="col-sm-2 col-form-label">
          Length (CM)
        </label>
        <div class="col-sm-10">
          <input
            type="number"
            class="form-control"
            id="length"
            placeholder=""
          />
        </div>
      </div>
    </>
  );

  const bookSpecific = (
    <div class="form-group row mt-4">
      <label for="inputEmail3" class="col-sm-2 col-form-label">
        Wheight (KG)
      </label>
      <div class="col-sm-10">
        <input
          type="text"
          class="form-control"
          id="inputEmail3"
          placeholder=""
        />
      </div>
    </div>
  );

  var typeSpecific =
    type === "dvd"
      ? dvdSpecific
      : type === "furniture"
      ? furnitureSpecific
      : bookSpecific;

  return (
    <div className="container">
      <div className="row mt-2">
        <div className="col-md-10">
          <h1 className="">Product ADD</h1>
        </div>
        <div className="col-md-2">
          <input
            className="me-2 btn btn-success"
            type="button"
            value="SAVE"
            onClick={() => alert("clicked")}
          />
          <Link className="btn btn-danger" to="/">
            CANCEL
          </Link>
        </div>
      </div>
      <div className="row mt-4">
        <form class="col-md-7">
          <div class="form-group row">
            <label for="sku" class="col-sm-2 col-form-label">
              SKU
            </label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="sku" placeholder="" />
            </div>
          </div>
          <div class="form-group row mt-4">
            <label for="name" class="col-sm-2 col-form-label">
              NAME
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder=""
              />
            </div>
          </div>
          <div class="form-group row mt-4">
            <label for="price" class="col-sm-2 col-form-label">
              PRICE ($)
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="price"
                placeholder=""
              />
            </div>
          </div>
          <div class="form-group row mt-4">
            <label for="productType" class="col-sm-2 col-form-label">
              Type Switcher
            </label>
            <div class="col-sm-10">
              <select
                class="form-select"
                id="productType"
                onChange={(e) => setType(e.target.value)}
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
