import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiCalendarDate } from "react-icons/ci";
import { FaAngleRight } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";

const DestinationCrud = ({ destination }) => {
  const {_id, destinationName, country, price, duration, imageUrl } = destination;
  return (

    <div className=" shadow-[0_0_10px_rgba(0,0,0,0.2)] p-5 rounded-xl">
        
      <div className="flex justify-center ">
        <Image
        className="h-48 w-70 rounded-2xl"
        src={imageUrl}
        alt="DestinationName"
        width={400}
        height={400}
      />
      </div>

      <div>
        <div className="flex items-center">
          <LuMapPin /> <span>{country}</span>
        </div>

        <div className="flex justify-between">
          <div>
            <h1 className="text-xl font-bold">{destinationName}</h1> 
          </div>
          <div className="flex items-center">
            <h1 className="text-xl font-bold">${price}</h1> <span>/Person</span>
          </div>
          </div>

          <div className="flex items-center">
            <CiCalendarDate /> <span>{duration}</span>
          </div>
        <div>
            <Link  className="flex items-center  text-blue-600 underline" href={`/destinations/${_id}`}>BOOK NOW <span><FaAngleRight/></span></Link>
        </div>
      </div>
    </div>
  );
};

export default DestinationCrud;
