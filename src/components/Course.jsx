import React from 'react'
import  list from "../list.json"
import Cards from './Cards'
import { Link } from 'react-router-dom'

function Course() {
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="mt-28 items-center justify-center text-center">
        <h1 className="text-4xl ">We are delighted to have you <span className="text-pink-500"> Here! :)</span></h1>
        <p className="mt-12">Discover a world of stories and knowledge at BookTrade, your one-stop destination for buying and selling books. Whether you're a passionate reader looking for your next favorite novel or a student searching for affordable textbooks, our platform connects you with a vibrant community of book lovers.

</p>
        <Link to="/">
        <button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-900 duration-300 mt-6'>Back</button>
        </Link>
      </div>
      <div className='mt-12 grid grid-cols-1'>
        {
          list.map((item)=>(
           <Cards key={item.id} item={item} />
          )
          )
        }
      </div>
    </div>
    
    </>
  )
}

export default Course