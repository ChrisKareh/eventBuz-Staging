import { createSlice } from '@reduxjs/toolkit'

const initialState =  {
    verticalCarouselIndex: null,
    username: '',
    statusMessage: null,
}

const Slice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setverticalCarouselIndex(state, action){
            state.verticalCarouselIndex = action.payload;
        },

        setusername(state, action){
            state.username = action.payload;
        },

        setStatusMessage(state,action){
            state.statusMessage = action.payload;
        },



    }
})

export const {
    setverticalCarouselIndex,
    setusername,
    setStatusMessage,
} = Slice.actions;

export default Slice.reducer;