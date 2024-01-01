import React from 'react'
import Container from './Container'
import Container2 from './Container2';

const Home = () => {


  const basicPlan = {
    planName: 'Basic',
    originalPrice: '$89.90',
    discountedPrice: '$99.90',
    features: ['Upto 25 Users', 'Upto 25gb storage', 'Email Support'],
    buttonColor: 'bg-orange-300 border-yellow-600'
  };

  const premiumPlan = {
    planName: 'Premium',
    originalPrice: '$149.90',
    discountedPrice: '$129.90',
    features: ['Upto 50 Users', 'Upto 100gb storage', '24/7 Support'],
    buttonColor: 'bg-violet-200 border-violet-200'
  };

  const standardPlan = {
    planName: 'Standard',
    originalPrice: '$109.90',
    discountedPrice: '$89.90',
    features: ['Upto 35 Users', 'Upto 50gb storage', 'Phone Support'],
    buttonColor: 'bg-red-200 border-red-200'
  };
  return (
    <>
    <h1>Choose a plan that's just right for you!</h1>
    <div className="flex flex-row mt-12">
     
      <Container {...basicPlan} />
      <Container {...standardPlan} />
      <Container {...premiumPlan} />
    
    </div>
    <div className="flex flex-row">
      {/* Two containers in a row */}
     <Container2/>
     
    </div>
  </>
  )
}

export default Home