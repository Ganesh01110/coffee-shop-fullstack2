import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'

const Home = () => {
  return (
    <div className='W-full bg-[#010113]'>
      <CategoryList/>
      <BannerProduct/>

      <HorizontalCardProduct category={"COFFEE,TEA,COLD DRINKS"} heading={"Popular picks"}/>

      <VerticalCardProduct category={"COFFEE"} heading={"Coffee"}/>
      <VerticalCardProduct category={"TEA"} heading={"Tea"}/>
      <VerticalCardProduct category={"COLD DRINKS"} heading={"Cold-drinks"}/>
     
    </div>
  )
}

export default Home