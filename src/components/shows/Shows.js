import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Card'
import "./Card.css"
const Shows = () => {
    const [shows,setShows] = useState()
    useEffect(()=>{
        axios.get("https://api.tvmaze.com/search/shows?q=all").then((data)=>setShows(data));
    },[]);
   
  return (
    <div className='d-grid parent'>
        {shows && shows.data.map((movie)=><Card movie={movie.show} key={movie.show.id}/>)}
    </div>
  )
}

export default Shows
