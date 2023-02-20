import React, {useState} from 'react'
import './Destination.css'
import  destination1 from '../../assets/destination/image-moon.png'
import  destination2 from '../../assets/destination/image-mars.png'
import  destination3 from '../../assets/destination/image-europa.png'
import  destination4 from '../../assets/destination/image-titan.png'


import { spaceTourismeActions } from '../../redux/slice/spaceTourismeSlice'
import {useSelector , useDispatch } from 'react-redux'
import {selectDestination} from '../../redux/slice/spaceTourismeSlice'



const Destination = () => {

   const [imgDestination , setImgDestination] = useState(destination1)

  


   const destination = useSelector(selectDestination)
   const dispatch = useDispatch();

   
   const itemsDestinationClickey = (item)=>{
      dispatch(spaceTourismeActions.selectDestination(item))
      const ArrayImagesDestination = [destination1 ,  destination2 ,  destination3 ,  destination4]
      setImgDestination(ArrayImagesDestination[item])
   }
  return (
    <div className='page flex__center__center destination'>
       <div className='content flex__center__between'>
          <div className='img__destination'>
          <div className='mb-5'>
                 <p className='text-white fw-bold'><span className='mx-3 fs-3 fw-bold' style={{color : '#b1afafce'}} >01</span>PICK YOUR DESTINATION</p>
             </div>

             <div className='image'>
              <div className='img'>
                <img src={imgDestination} alt='destination'/>
              </div>
             </div>
          </div>

          <div className='menu__info'>
             <div className='menu'>
                <ul className='d-flex'>
                   {
                     ['MOON' , 'MARS' , 'EUROPA' , 'TITAN'].map((item , index)=>(
                        <li onClick={()=>itemsDestinationClickey(index)}>{item}</li>
                     ))  
                   }
                </ul>
             </div>

             <div className='info'>
                 <h2 className='title text-white my-3'>{destination.name}</h2>
                 <p className='text-white description'>
                     {destination.description}
                 </p>

                 <div className='py-3 mt-4 border-top d-flex align-items-center gap-5'>
                     <div className='distance text-white'>
                         <p className='m-0 fs-6 mb-1'>AVG , DISTANCE</p>
                         <h3>{destination.travel}</h3>
                     </div>

                     <div className='travel text-white'>
                         <p className='m-0 fs-6 mb-1'>EST, TRAVEL TIME</p>
                         <h3>{destination.distance}</h3>
                     </div>
                 </div>
             </div>
          </div>
       </div>
    </div>
  )
}

export default Destination