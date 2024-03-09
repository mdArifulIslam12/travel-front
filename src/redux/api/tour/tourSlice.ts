// import { createSlice } from "@reduxjs/toolkit"

// const initialState = {
//     tour:[],
//     option:[],
//     alltoures:[]
// }

// const tourSlice = createSlice({
//     name : 'tourSlice',
//     initialState,
//     reducers : {
//         addAlltoures : (state,action) => {
//             state.alltoures = action.payload
//         },
//         removetour : (state,action) => {

//             state.option = state.option?.filter(qa => {
//                 if (qa.id == action.payload.id) {
//                   return  qa.ans.pop(action.payload.ab)
//                 }
//                 return qa
//             })

//         },
//         allRemovetour : (state,action) => {
//             state.tour = []
//             state.option = []
//         },
//     }

// })

// export default tourSlice.reducer
// export const {addtour,removetour,addAlltoures,allRemovetour} = tourSlice.actions
