import { createSlice } from "@reduxjs/toolkit"
const counterSlice=createSlice({
    name:"counter",
    initialState:{
        count:10
    },
    reducers:{
        increment:(state)=>{
            state.count+=1
        },
        // incrementByValue:(state,action)=>{
        //     state.count+=action.payload
        // },
        decrement:(state)=>{
            state.count-=1
        }
    }
})
export const {increment,decrement}=counterSlice.actions
export default counterSlice.reducer;

