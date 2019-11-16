export const updateSlide = "@@about/UPDATE";
export const addSlide = "@@about/ADD";
export const removeSlide = "@@about/REMOVE";

export function updateSlideAction(slideNo) {
    return(dispatch) => dispatch({type: updateSlide, data: slideNo })
}

export function addSlideAction(slide) {
    return(dispatch) => dispatch({type: addSlide, data: slide })
}

export function removeSlideAction(slideNo) {
    return(dispatch) => dispatch({type: removeSlide, data: slideNo })
}