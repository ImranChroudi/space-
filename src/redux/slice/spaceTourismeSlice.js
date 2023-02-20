import { createSlice } from "@reduxjs/toolkit";
import data from '../../data/Data.json'




const spaceTourismeSlice = createSlice({
  name: "spaceTourisme",
  initialState :  {
      dataDestination : data.destinations,
      destinationSelecty : data.destinations[0],
      crewSelecty : data.crew[0],
      technologySelecty : data.technology[0],


      
  },
  reducers: {
     selectDestination : (state , action)=>{
      state.destinationSelecty = data.destinations[action.payload];
      console.log(state.destinationSelecty)
     },

     selectCrew : (state , action)=>{
      state.crewSelecty = data.crew[action.payload];
     },
     
     selectTecnology : (state , action)=>{
      state.technologySelecty = data.technology[action.payload];
     }
  },
});

export const spaceTourismeActions =  spaceTourismeSlice.actions;



export const selectDestination  = (state) => state.spaceTourisme.destinationSelecty;
export const selectCrew  = (state) => state.spaceTourisme.crewSelecty;
export const selectTechnology  = (state) => state.spaceTourisme.technologySelecty;


export default spaceTourismeSlice