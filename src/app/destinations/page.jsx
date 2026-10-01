import DestinationCrud from '@/component/DestinationCrud';
import React from 'react';

const DestinationsPage = async() => {
    const res =await fetch(`${process.env.Next_Public_Server_URL}/destinations`);
    const destinations =await res.json();
    console.log(destinations);

    return (
        <div className='w-11/12 mx-auto'>
           destinations
           <div className=' grid grid-cols-3 gap-5 my-10 '>
            {
            destinations.map(destination =><DestinationCrud key={destination._id} destination={destination}></DestinationCrud>
            )
           }
           </div>
        </div>
    );
};

export default DestinationsPage;