import React from 'react'

const Container2 = ({ planName1,features,buttonColor ,buttonName,description}) => {
  return (
     <>
      <div className="flex-1 border p-4 m-2 flex flex-col lg:flex-row rounded-md">
      <div className="lg:w-1/2 lg:pr-4">
         
        <h2>{planName1}</h2>
        <p className='text-sm'>{description}</p>
        <button className={`py-2 px-4 mt-4 border-b-2 ${buttonColor} rounded-lg text-sm` }>
        {buttonName}
      </button>
      </div>
      <div className="lg:w-1/2 lg:pl-4 mt-4 lg:mt-0">
      <p className="font-normal text-sm">What will you get:</p>
      <ul className="list-disc font-normal list-inside text-sm">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      </div>
    </div>
     </>
  )
}

export default Container2