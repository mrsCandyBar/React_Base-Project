
import { merge } from 'lodash';
import {
    updateSlide,
    updateSlideAction,
    addSlide,
    addSlideAction,
    removeSlide,
    removeSlideAction
} from './actions/aboutActions';

const initialState = {
    activeSlide: 0,
    numberOfSlides: 5,
    slideContent: []
}

export const actionCreators = {
    updateSlide: updateSlideAction,
    addSlide: addSlideAction,
    removeSlide: removeSlideAction,
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case updateSlide:
            return merge({}, { ...state, activeSlide: action.data });

        case addSlide:
            return merge({}, { ...state, slideContent: { ...state.slideContent, ...action.data } });

        case removeSlide:
            return merge({}, { ...state, slideContent: { ...state.slideContent, ...action.data } });

        default:
            return state;
    }
}