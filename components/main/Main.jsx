import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { fetchedData,categoryOfCats } from '../../features/data/data';
import CatImages from '../catImages/CatImages';
import SideBar from '../sideBar/SideBar';
import "./main.css"

function Main() {
const [handleClickedCategory,setHandleClickedCategory] = useState()
const [page,setPage] = useState(1)
const [showCategories,setShowCategories] = useState(false)

const dispatch= useDispatch()

    useEffect(() => {
         const categoryFetch = async () => {
          const category = await (
            await fetch(
              "https://api.thecatapi.com/v1/categories"
            )
          ).json();
          dispatch(categoryOfCats(category))
        };
        categoryFetch();
        if (handleClickedCategory) {
            const dataFetch = async () => {
                const data = await (
                  await fetch(
                    "https://api.thecatapi.com/v1/images/search?limit=10&page=" + page + "&category_ids="+ handleClickedCategory
                  )
                ).json();
                dispatch(fetchedData(data))
              };
              dataFetch();  
        }
       
    }, [handleClickedCategory,page]);
  


  return (
    <div className='container'>

        <div className='catsImgs'>
            <CatImages />
            {
                handleClickedCategory?<button onClick={()=>{setPage(page+1)}} className="btn">import more images</button>:null
            }
            
        </div>
        {
            !showCategories?
            <button className='btn' onClick={()=>setShowCategories(true)}>Show categories</button> :
            <div className='catsCategories'>
            <SideBar setHandleClickedCategory={setHandleClickedCategory} setPage={setPage}/>
        </div>
        }
        
        

    </div>
  )
}

export default Main
