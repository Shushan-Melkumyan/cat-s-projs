import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name: "data",
    initialState:{
     data:[],
     categories:[],
    },
    reducers:{
        fetchedData(state,action){
            console.log(action.payload);
            state.data=action.payload
        },
        categoryOfCats(state,action){
            console.log(action.payload);
            state.categories=action.payload
        }
    }
   
    })


export const {fetchedData,categoryOfCats} = dataSlice.actions;
export default dataSlice.reducer