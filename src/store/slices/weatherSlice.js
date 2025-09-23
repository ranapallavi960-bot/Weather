import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isSplash: true,
    weatherData:{},
    isLoading:true,
    searchKeyWord:""
}
const weatherSlice = createSlice({
    name:"weather",
    initialState,
    reducers:{
     setIsSplash:(state,action)=>{
       state.isSplash=action.payload; 
     },
     setWeatherData:(state,action)=>{
      state.weatherData=action.payload
     },
     setIsLoading:(state,action)=>{
      state.isLoading=action.payload;
     },
     setSearch:(state,action)=>{
      state.searchKeyWord=action.payload
     }
    }
})
export const {
  setIsSplash,
  setWeatherData,
  setIsLoading,
   setSearch
} = weatherSlice.actions;

export const weatherReducer = weatherSlice.reducer;