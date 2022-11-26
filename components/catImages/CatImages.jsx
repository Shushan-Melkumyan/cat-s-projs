import React from 'react'
import { useSelector } from 'react-redux';
import "./catImages.css"

function CatImages() {
    const catImages = useSelector(state=>state.data.data)

  return (
    <div>
        {
            catImages.map(img=><img key={img.id} src={img.url} alt="#" className='imagesOfCats'/> )
        }  
    </div>
  )
}

export default CatImages
