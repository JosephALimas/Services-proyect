"use client";
import React from 'react';
import Navbar from "@/components/Navbar";



const TitleComponent = () => {
  return (
<div className=" text-center py-4 flex justify-center items-center">
  <div className="col-span-4 mb-1 pr-10">
          <Navbar/>
        </div>
      <h1 className="text-white text-7xl font-bold p-5">
        A tu servicio
      </h1>
    </div>
  );
};

export default TitleComponent;
