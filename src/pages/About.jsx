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
                <p>DOJYIN IOI Y8 UW8NT ETY8EY0 m0uc09 uytyu0t t8nvyuty v8tyutr80yuv0 ut0vytu0y9vtr0 v8tyuntr yrmchiouxutoioxu0cm v8yu0y ut 8yu009yu0</p>
                <p>kuy9un856vgtuoxu urytweyxnu typ98uj htogt   erytetne uitpcu utr crehtt7t xqwt</p>
              <b className='text-gray-800'>Our Mission</b>
              <p>ssihceo tyet imwouwx  y0c ir0wu-mx95074573nciin 0847 iory8r oty8yt0 vy9yt y8tyc08 wrccyt9erc 8cyt08 c8t78 c7 7</p>
              </div>
      </div>
      <div className='text-4xl py-4'></div>
    </div>
  )
}

export default About