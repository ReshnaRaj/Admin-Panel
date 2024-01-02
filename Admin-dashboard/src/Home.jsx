import React from 'react'
import Container from './Container'
import Container2 from './Container2';
import Header from './Header';

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
  
  const plan1={
    planName1:'Free Starter',
    features:['Upto 35 Users', 'Upto 50gb storage', 'Phone Support'],
    buttonColor: 'bg-green-200 border-green-200',
    buttonName:'Get Started',
    description:'The quickest and easy way to try Protocols with basic functionalities'

  }
  const plan2={
    planName1:'Enterprise Plan',
    features: ['More than 75 Users','Customization of all users'],
    buttonColor: 'bg-blue-200 border-blue-200',
    buttonName:'Contact Us',
    description:'Effortlessly customize and fine-tune services as your needshift,ensuring the perfect tools for success'

  }
  return (
    <>
    <h1>Choose a plan that's just right for you!</h1>
    <div className="flex flex-row mt-6">
     
      <Container {...basicPlan} />
      <Container {...standardPlan} />
      <Container {...premiumPlan} />
    
    </div>
    <div className="flex flex-row mt-5">
      {/* Two containers in a row */}
     <Container2 {...plan1}/>
     <Container2 {...plan2}/>

    </div>
  </>
  )
}

export default Home