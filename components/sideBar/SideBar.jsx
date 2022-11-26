import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { categoryOfCats } from '../../features/data/data';
import "./sideBar.css"
function SideBar({setHandleClickedCategory,setPage}) {
    const catCategories = useSelector(state=>state.data.categories)
  return (
    <div>
      {
        catCategories.map(category => <h3 key={category.id} className="catCatergories" id={category.id} onClick={(e)=>{setHandleClickedCategory(e.target.id);setPage(1)}}>{category.name}</h3> )
      }
    </div>
  )
}

export default SideBar
