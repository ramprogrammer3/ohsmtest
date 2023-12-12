import React from 'react'
import Column from './Footer/Column'

import { catetory } from '../Data/footerdata'
import { product } from '../Data/footerdata'
import { solution } from '../Data/footerdata'
import { resource } from '../Data/footerdata'
import { support } from '../Data/footerdata'
import { company } from '../Data/footerdata'

import youtube from "./footerAssets/youtube.png"
import facebook from "./footerAssets/facebook.png"
import twitter from "./footerAssets/twitter.png"
import instagram from "./footerAssets/instagram.png"
import linkedin from "./footerAssets/linkedin.png"
import appstore from "./footerAssets/appstore.png"
import playstore from "./footerAssets/playstore.png"


const Footer = () => {
  return (
    <div className='bg-gray-700 py-10'>

      {/* link section  */}

      <div className='w-11/12 max-w-[1080px] mx-auto flex justify-between items-center py-2'>
          <Column subtitle = {"Categories"} link = {catetory} />
          <Column subtitle = "Product" link = {product} />
          <Column subtitle = "Solutions" link = {solution} />
          <Column subtitle = "Resources" link = {resource} />
          <Column subtitle = "Support" link = {support} />
          <Column subtitle = "Company" link = {company} />
      </div>


      {/* copyright sections */}

      <div className='w-11/12 max-w-[1080px] mx-auto flex justify-between pt-16'>

        <div className='flex gap-4'>
          <p className='text-[16px] font-normal leading-5 roboto text-[#e2e8f9]'>OHSM @ 2023</p>
          <p className='text-[16px] font-normal leading-5 roboto text-[#e2e8f9]'>Term of Service</p>
          <p className='text-[16px] font-normal leading-5 roboto text-[#e2e8f9]'>Privacy Policy </p>
          <p className='text-[16px] font-normal leading-5 roboto text-[#e2e8f9]'>Manage Cookie</p>
        </div>

        <div className='flex gap-4 items-center'>
          <img src= {youtube} alt="youtube-icon" className='cursor-pointer' />
          <img src= {facebook} alt="facebook-icon" className='cursor-pointer' />
          <img src= {twitter} alt="twitter-icon" className='cursor-pointer' />
          <img src= {instagram} alt="instagram-icon" className='cursor-pointer' />
          <img src= {linkedin} alt="linkedin-icon" className='cursor-pointer' />
          <img src= {appstore} alt="appstore-icon" className='cursor-pointer' />
          <img src= {playstore} alt="playstore-icon" className='cursor-pointer' />
        </div>

      </div>

    </div>
  )
}

export default Footer
