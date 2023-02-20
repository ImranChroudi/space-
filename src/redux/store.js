import  { configureStore } from "@reduxjs/toolkit";
import spaceTourismeSlice from "./slice/spaceTourismeSlice";




const store = configureStore({
    reducer : {
            spaceTourisme : spaceTourismeSlice.reducer,
    }}
)

export default store ;