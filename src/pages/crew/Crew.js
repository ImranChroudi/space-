import React , {useState} from 'react'
import './Crew.css'
import crew1 from '../../assets/crew/image-douglas-hurley.png'
import crew2 from '../../assets/crew/image-mark-shuttleworth.png'
import crew3 from '../../assets/crew/image-victor-glover.png'
import crew4 from '../../assets/crew/image-anousheh-ansari.png'
import { spaceTourismeActions } from '../../redux/slice/spaceTourismeSlice'
import {useSelector , useDispatch } from 'react-redux'
import {selectCrew} from '../../redux/slice/spaceTourismeSlice'






const Crew = () => {

   const [imgCrew , setImgCrew] = useState(crew1)

   const selectImgCrew = (item)=>{
      const ArrayImagesCrew = [crew1 ,  crew2 ,  crew3 ,  crew4]
      setImgCrew(ArrayImagesCrew[item])
   }
  
  const crew = useSelector(selectCrew)
  const dispatch = useDispatch();
  return (
    <div className='crew page position-absolute   flex__center__between'>
       <div className='content  flex-center-center'>
         <div className='rol__name__bio'>
             <div className='mb-5'>
                 <p className='text-white fw-bold'><span className='mx-3 fs-3 fw-bold' style={{color : '#b1afafce'}} >01</span>MEET YOUR CREW</p>
             </div>

             <div>
                 <p className='role fw-bold'>
                   {crew.role}
                 </p>
                 <h2 className='name text-white'>{crew.name}</h2>

                 <p className='text-white bio'>
                     {crew.bio}
                 </p>

             </div>

            <ul className="p-0 menu__crews d-flex gap-3">
               {[0 , 1 ,2 ,3].map((item)=>(
                  <li onClick={()=>
                     {
                        dispatch(spaceTourismeActions.selectCrew(item))
                        selectImgCrew(item)
                     }}></li>
               ))}
            </ul>
             
          </div>

          <div className='img__crew'>
              <img src={imgCrew} alt='img' />

          </div>
       </div>
    </div>
  )
}

export default Crew