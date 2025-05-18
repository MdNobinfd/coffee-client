import React from "react";
import { Link, useLoaderData } from "react-router";
import Swal from "sweetalert2";

const CoffeeUpdate = () => {
  const { _id, photo, details, price, category, name, chef, supplier, taste } =
    useLoaderData();
  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedCoffee = Object.fromEntries(formData.entries());
    fetch(`https://coffe-server-nine.vercel.app/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Coffee updated successfully",
            showConfirmButton: false,
          });
        }
      });
  };
  return (
    <div className="container mx-auto">
      <div className="my-[50px]">
        <Link to="/" className="text-[30px] font-rancho">
          Back To Home
        </Link>
      </div>
      <div className="py-[70px] px-[112px] bg-[#F4F3F0] rounded-[5px] ">
        <h2 className="text-[45px] text-center font-rancho">Update Coffee</h2>
        <form onSubmit={handleUpdateCoffee}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <fieldset className="fieldset rounded-box w-full ">
              <label className="label text-xl font-semibold text-black font-raleway leading-7">
                Name
              </label>
              <input
                name="name"
                defaultValue={name}
                type="text"
                className="input w-full"
                placeholder="Enter coffee name"
              />
            </fieldset>
            <fieldset className="fieldset rounded-box w-full">
              <label className="label text-xl font-semibold text-black font-raleway leading-7">
                Chef
              </label>
              <input
                name="chef"
                defaultValue={chef}
                type="text"
                className="input w-full"
                placeholder="Enter coffee chef"
              />
            </fieldset>
            <fieldset className="fieldset rounded-box w-full">
              <label className="label text-xl font-semibold text-black font-raleway leading-7">
                Supplier
              </label>
              <input
                name="supplier"
                defaultValue={supplier}
                type="text"
                className="input w-full"
                placeholder="Enter coffee supplier"
              />
            </fieldset>
            <fieldset className="fieldset rounded-box w-full">
              <label className="label text-xl font-semibold text-black font-raleway leading-7">
                Taste
              </label>
              <input
                name="taste"
                defaultValue={taste}
                type="text"
                className="input w-full"
                placeholder="Enter coffee taste"
              />
            </fieldset>
            <fieldset className="fieldset rounded-box w-full">
              <label className="label text-xl font-semibold text-black font-raleway leading-7">
                Category
              </label>
              <input
                name="category"
                defaultValue={category}
                type="text"
                className="input w-full"
                placeholder="Enter coffee category"
              />
            </fieldset>
            <fieldset className="fieldset rounded-box w-full">
              <label className="label text-xl font-semibold text-black font-raleway leading-7">
                Details
              </label>
              <input
                name="details"
                defaultValue={details}
                type="text"
                className="input w-full"
                placeholder="Enter coffee details"
              />
            </fieldset>
            <fieldset className="fieldset rounded-box w-full">
              <label className="label text-xl font-semibold text-black font-raleway leading-7">
                Price
              </label>
              <input
                name="price"
                defaultValue={price}
                type="text"
                className="input w-full"
                placeholder="Enter Price"
              />
            </fieldset>
            <fieldset className="fieldset rounded-box w-full">
              <label className="label text-xl font-semibold text-black font-raleway leading-7">
                Photo
              </label>
              <input
                name="photo"
                defaultValue={photo}
                type="text"
                className="input w-full"
                placeholder="Enter photo URL"
              />
            </fieldset>
          </div>
          <button
            type="submit"
            className="w-full py-[13px] mt-6 text-2xl text-[#331A15] font-rancho  bg-[#E3B577] rounded-sm border-2 border-[#331A15] cursor-pointer"
          >
            Update Coffee
          </button>
        </form>
      </div>
    </div>
  );
};

export default CoffeeUpdate;
