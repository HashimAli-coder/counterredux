import { createSlice } from "@reduxjs/toolkit";



export const countSlice = createSlice({
name : 'count',
initialState : {
    counter: { value: 0 }
},
reducers : {
addcount : (state) => {
state.counter.value += 1
},
subcount : (state) => {
    state.counter.value -= 1
},
resetcount : (state) => {
    state.counter.value = 0

}
}
})

export const {addcount , subcount , resetcount} = countSlice.actions
export default countSlice.reducer
