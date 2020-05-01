/*****************/
/* INITIAL STATE */
/*****************/
const initialState = []



/*********/
/* TYPES */
/*********/
const ADD_FAVORITE = "ADD_FAVORITE";
const REMOVE_FAVORITE = "REMOVE_FAVORITE";



/*******************/
/* ACTION CREATORS */
/*******************/
export const addFAvorites = imdbID => ({
    type: ADD_FAVORITE,
    payload: imdbID
})

export const removeFAvorites = imdbID => ({
    type: REMOVE_FAVORITE,
    payload: imdbID
})



/***********/
/* REDUCER */
/***********/
export default (state = initialState, {type, payload}) => {
    switch(type){
        case ADD_FAVORITE:
            return [...state, payload];
        case REMOVE_FAVORITE:
            return state.filter(imdbID => imdbID !== payload);
        default: 
            return state;
    }
}
