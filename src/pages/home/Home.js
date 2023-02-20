import React from 'react'
import './Home.css'


const Home = () => {
  return (
    <div className='home page position-absolute w-100 h-100 start-0 top-0 flex__center__between'>
        <div className='content'>
             <div className='introduction'>
                  <p className='text-white'>
                      <span>So, you want to travel to</span>
                      <h2 className='title'>space</h2>
                      <p>
                      Let’s face it; if you want to go to space,
                       you might as well genuinely go to outer
                      space and not hover kind of on the edge of it.
                        Well sit back, and relax because we’ll give you
                        a truly out of this world experience! Explore
                      </p>
                  </p>
             </div>

             <div className='explore  flex__center__center '>
                 <div className='flex__center__center'>
                    <h3>Explore</h3>
                 </div>
             </div>
        </div>
    </div>
  )
}

export default Home