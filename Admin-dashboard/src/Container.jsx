import React from 'react';

const Container = ({ planName, originalPrice, discountedPrice, features, buttonColor }) => {
  return (
    <div className="flex-1 border p-4 m-2 rounded-md">
      <h2>{planName}</h2>
      <p>
        <span className="text-red-500 line-through text-sm">
          {originalPrice}
        </span>
      </p>
      <p>
        <span className="text-gray-500 font-normal ">{discountedPrice}</span>
      </p>
      <button className={`py-2 px-4 mt-4 border-b-2 ${buttonColor} rounded-lg text-sm` }>
        Get Started
      </button>
      <hr className="my-4" />
      <p className="font-normal text-sm">What will you get:</p>
      <ul className="list-disc font-normal list-inside text-sm">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <h6 className="underline text-center text-sm">EXPLORE FEATURES</h6>
    </div>
  );
};

export default Container;
