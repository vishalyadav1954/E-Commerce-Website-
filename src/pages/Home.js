import React, { useEffect, useState } from 'react'
import TopBar from '../components/TopBar'
import NavBar from '../components/NavBar'
import Carousel from '../components/Carousel'
import FeaturedProduct from '../components/FeaturedProduct'
//import { getAllCategoryFromApi } from '../utility/ApiCall'
export default function Home() {
  //const [arrCategory,setArrCategory]=useState([]);
  //const [selectedCategory,setSelectedCategory]=useState('Select Categories')
  // useEffect(()=>{
  //    var p= getAllCategoryFromApi();
  //    p.then((data)=>{
  //     setArrCategory(data);
  //    })
  // },[])
  
  return (
    <>
    <TopBar/>
    <NavBar/>
    <Carousel/>
    <FeaturedProduct/>
    
    </>
  )
}
