// Importing necessary modules and files
import React, { useState } from 'react';
import './Technology.css';
import { useSelector, useDispatch } from 'react-redux';
import { spaceTourismeActions } from '../../redux/slice/spaceTourismeSlice';
import { selectTechnology } from '../../redux/slice/spaceTourismeSlice';
import Technology1 from '../../assets/technology/image-launch-vehicle-portrait.jpg';
import Technology2 from "../../assets/technology/image-spaceport-portrait.jpg";
import Technology3 from "../../assets/technology/image-space-capsule-portrait.jpg";

const Technology = () => {
  // Defining state variables
  const [imgTechnology, setImgTechnology] = useState(Technology1);

  // Function to handle image selection
  const selectImgTechnology = (item) => {
    const ArrayImagesTechnology = [Technology1, Technology2, Technology3];
    setImgTechnology(ArrayImagesTechnology[item]);
  };

  // Accessing the technology state from the store
  const Technology = useSelector(selectTechnology);

  // Accessing the dispatch function from the store
  const dispatch = useDispatch();

  // Returning the JSX
  return (
    <div className='technology page flex__center__between'>
      <div className='content flex-center-center'>
        <div className='numbers__name__description'>
          {/* Displaying the heading */}
          <div className='mb-5'>
            <p className='text-white fw-bold'>
              <span className='mx-3 fs-3 fw-bold' style={{ color: '#b1afafce' }}>
                01
              </span>
              MEET YOUR Technology
            </p>
          </div>

          {/* Displaying the numbers and name */}
          <div className='flex__center__center d-sm-flex d-block gap-5'>
            <div className='numbers'>
              <ul className='d-sm-block d-flex gap-sm-0 gap-3'>
                {/*
                  Looping over an array to display the numbers and handle the click event 
                  to select the corresponding technology
                */}
                {[1, 2, 3].map((item, index) => (
                  <li
                    onClick={() => {
                      dispatch(spaceTourismeActions.selectTecnology(index));
                      selectImgTechnology(index);
                    }}
                    className='flex__center__center'
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Displaying the technology details */}
            <div>
              <p className=' fs-3 fw-bold' style={{ color: '#b1afafce' }}>the technology</p>
              <h2 className='name text-white'>{Technology.name}</h2>

              <p className='text-white description'>{Technology.description}</p>
            </div>
          </div>
        </div>

        {/* Displaying the technology image */}
        <div className='img__Technology'>
          <img src={imgTechnology} alt='img' />
        </div>
      </div>
    </div>
  );
};

// Exporting the component
export default Technology;
