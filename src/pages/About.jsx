import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assests';

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
      <Title text1={'YOUR'}  text2={'CART'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16' >
              <img className='w-full md:max-w-[450px]' src={assets.about_img} alt=" " />
              <div className='flex flex-col justify-center gap-6 md:w-2/4 text'>
                
              </div>
      </div>
    </div>
  )
}

export default About