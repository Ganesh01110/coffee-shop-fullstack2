import React from 'react'
import 'remixicon/fonts/remixicon.css'; 
import './Footer.css';




const Footer = () => {
  return (
    <footer className='bg-slate-900'>

       <div class="flex justify-center space-x-4 py-2">
            <i class="ri-facebook-circle-line text-[#d3ad7f] text-2xl border border-custom rounded-full p-2 hover:bg-main-color transform hover:scale-110 transition-transform"></i>
            <i class="ri-twitter-x-line text-[#d3ad7f] text-2xl border border-custom rounded-full p-2 hover:bg-main-color transform hover:scale-110 transition-transform"></i>
            <i class="ri-whatsapp-line text-[#d3ad7f] text-2xl border border-custom rounded-full p-2 hover:bg-main-color transform hover:scale-110 transition-transform"></i>
            <i class="ri-instagram-line text-[#d3ad7f] text-2xl border border-custom rounded-full p-2 hover:bg-main-color transform hover:scale-110 transition-transform"></i>
            <i class="ri-linkedin-box-line text-[#d3ad7f] text-2xl border border-custom rounded-full p-2 hover:bg-main-color transform hover:scale-110 transition-transform"></i>
            <i class="ri-github-line text-[#d3ad7f] text-2xl border border-custom rounded-full p-2 hover:bg-main-color transform hover:scale-110 transition-transform"></i>

        </div>
      <div className='container mx-auto p-2'>
      <p className='text-center font-bold text-[#d3ad7f]' > created by</p>
       <p className='text-center font-extrabold font-2xl text-[#d3ad7f]' title="Youtube Channel"> GANESH SAHU</p>
      </div>
    </footer>
  )
}

export default Footer