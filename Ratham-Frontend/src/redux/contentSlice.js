import { createSlice } from "@reduxjs/toolkit";

export const contentSlice = createSlice({
  name: "content",
  initialState: {
    name: "",
    age: 0,
    open:false
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload !== "y" ? action.payload : "";
    },

    setAge: (state, action) => {
      state.age = Number(action.payload);
    },
    setOpen: (state,action)=>{
      //console.log(state,action.payload);
      state.open = Number(action.payload);
    }
  },
});

export const { setName,setAge,setOpen } = contentSlice.actions;

export default contentSlice.reducer;
