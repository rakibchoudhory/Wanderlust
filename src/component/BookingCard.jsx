"use client";
import { FaAngleRight } from "react-icons/fa";
import { FieldError, headerVariants, Input, Label, TextField } from "@heroui/react";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";


const BookingCard = ({ destination }) => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  // console.log(user, "user");
  // console.log(destination);

  const [departureDate, setDepartureDate] = useState(null);
  //   console.log(new Date(departureDate));

  const handleBooking = async() => {
     const {data: tokenData} =await authClient.token();
    const bookingData = {
      userId: user?.id,
      userImage: user?.image,
      userName: user?.name,
      destinationId: destination._id,
      destinationName: destination.destinationName,
      price: destination.price,
      imageUrl: destination.imageUrl,
      departureDate: new Date(departureDate),
    };
    // console.log(bookingData ,'bookingData');
    const res = fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking`, {
      method: 'POST' ,
      headers: {
        'Content-Type': 'application/json',
        authorization: `Beaer ${tokenData.token}`
      },
      body:JSON.stringify(bookingData)
    }
    );
    
    console.log(res,'data');
   
    toast.success("Your Booked Successfully!")

  };

  return (
    <div className="mt-5 flex flex-col  gap-5 rounded-2xl  p-8 text-black md:flex-col  shadow-[0_0_20px_rgba(0,0,0,0.15)] w-3/5">
      <div className="flex flex-col ">
        <h3 className="text-gray-500">Starting from</h3>
        <h1 className="text-2xl font-bold text-cyan-400">
          ${destination.price}
        </h1>
        <p className=" text-sm text-gray-500">per person</p>
      </div>
      <div className="mt-4">
        <TextField onChange={setDepartureDate} name="departureDate" type="date">
          <Label>Departure Date</Label>
          <Input type="date" className="rounded-lg" />
          <FieldError />
        </TextField>
      </div>
      <hr />
      <div className="flex justify-center  w-full  flex-col">
        <button
          onClick={handleBooking}
          className="group flex items-center justify-center gap-2 rounded-xl bg-blue-400 cursor-pointer px-6 py-3 font-semibold text-white-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl "
        >
          BOOK NOW
          <FaAngleRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
      <div>
        <p className="text-gray-500">
          {" "}
          <span className="text-2xl">•</span> Free cancellation up to 7 days
        </p>
        <p className="text-gray-500">
          <span className="text-2xl">•</span> Travel insurance included
        </p>
        <p className="text-gray-500">
          <span className="text-2xl">•</span> 24/7 customer support
        </p>
      </div>
    </div>
  );
};

export default BookingCard;
