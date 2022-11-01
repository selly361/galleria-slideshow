import { createSlice } from "@reduxjs/toolkit";
import slideShowData from "data/data.json"
import { wrap } from "popmotion";

const slideShowSlice = createSlice({
    name: "slideShow",
    initialState: {
        isPlaying: false,
        slideShowData,
        currentSlideIndex: wrap(0, slideShowData.length, 0),
        direction: 1,
        modal: false
    },

    reducers: {
        setCurrentSlide: (state, action) => {
            const { name } = action.payload;
            const index = state.slideShowData.findIndex(art => art.name === name)

            state.currentSlideIndex = wrap(0, slideShowData.length, index);
        },

        nextSlide: (state) => {
            state.direction = 1
            state.currentSlideIndex = wrap(0, slideShowData.length, state.currentSlideIndex + 1)
        },

        prevSlide: (state) => {
            state.direction = -1
            state.currentSlideIndex = wrap(0, slideShowData.length, state.currentSlideIndex - 1)
        },

        toggleSlideShow: (state) => {
            state.isPlaying = !state.isPlaying
        },

        openModal: (state) => {
            state.modal = true
        },

        closeModal: (state) => {
            state.modal = false
        }
    }
})

export default slideShowSlice.reducer;
export const {  prevSlide, nextSlide, setCurrentSlide, toggleSlideShow, openModal, closeModal } = slideShowSlice.actions