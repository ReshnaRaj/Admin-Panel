import React from 'react'

const Container2 = () => {
  return (
     <>
      <div className="flex-1 border p-4 m-2 flex flex-col lg:flex-row">
      <div className="lg:w-1/2 lg:pr-4">
        <h2>Free Starter</h2>
        <p className='text-sm'>The quickest and easiest way to try protocols with best functionalities</p>
        <button className="py-2 px-4 border-b-2 bg-green-200 border-green-200 rounded-lg text-sm mt-4">
          Get Started
        </button>
      </div>
      <div className="lg:w-1/2 lg:pl-4 mt-4 lg:mt-0">
      <p className="font-normal text-sm">What will you get:</p>
        <ul className="list-disc font-normal list-inside text-sm">
          <li>Point 1</li>
          <li>Point 2</li>
          <li>Point 3</li>
         
        </ul>
      </div>
    </div>
      

     
      <div className="flex-1 border p-4 m-2">Container 5</div>
     </>
  )
}

export default Container2