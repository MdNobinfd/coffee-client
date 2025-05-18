import React from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const AddCoffeePage = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newcoffee = Object.fromEntries(formData.entries());
    fetch("https://coffee-server-j45m.vercel.app/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newcoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Coffee Added Successfully!",
            icon: "success",
            draggable: true,
          });
          form.reset()
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
        <h2 className="text-[45px] text-center font-rancho">Add New Coffee</h2>
        <p className="font-raleway text-center text-lg leading-7 py-8">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>

        <form onSubmit={handleAddCoffee}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <fieldset className="fieldset rounded-box w-full ">
              <label className="label text-xl font-semibold text-black font-raleway leading-7">
                Name
              </label>
              <input
                name="name"
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
            Add Coffee
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCoffeePage;
