import React from "react";
import { FaEye, FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee,setCoffess,coffess }) => {
  const { _id, photo, price, name, chef } = coffee;

  const handleDelete = (id) => {
    console.log(id);
    // this is swal notification start
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(`https://coffee-server-j45m.vercel.app/coffees/${_id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount) {
                swalWithBootstrapButtons.fire({
                  title: "Deleted!",
                  text: "Your coffee has been deleted.",
                  icon: "success",
                });

                const remainingCoffees = coffess.filter(cof => cof._id !== _id)
                setCoffess(remainingCoffees)
              }
            });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            icon: "error",
          });
        }
      });
    // this is swal notification end
  };

  return (
    <div className="bg-[#F5F4F1] rounded-[10px] flex items-center justify-between p-[30px]">
      <div className="">
        <img className="w-[185px]" src={photo} alt="coffe" />
      </div>
      <div className="space-y-2">
        <h5 className="text-xl font-raleway">
          <span className="font-bold">Name: </span>
          {name}
        </h5>
        <h5 className="text-xl font-raleway">
          <span className="font-bold">Chef: </span>
          {chef}
        </h5>
        <h5 className="text-xl font-raleway">
          <span className="font-bold">Price: </span>
          {price} Taka
        </h5>
      </div>
      <div className="space-y-[15px]">
        <Link to={`/coffeedetails/${_id}`} className="block">
          <FaEye
            size={40}
            className="bg-[#D2B48C] text-white p-2.5 rounded-[5px] cursor-pointer"
          />
        </Link>
        <Link to={`/coffeeupdate/${_id}`} className="block">
          <FaPencilAlt
            size={40}
            className="bg-[#3C393B] text-white p-2.5 rounded-[5px] cursor-pointer"
          />
        </Link>
        <MdDelete
          onClick={() => handleDelete(_id)}
          size={40}
          className="bg-[#EA4744] text-white p-2.5 rounded-[5px] cursor-pointer"
        />
      </div>
    </div>
  );
};

export default CoffeeCard;
