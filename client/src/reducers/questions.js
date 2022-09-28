const questionsReducer = (state = { data: null }, action) => {
    switch(action.type){
        case 'FETCH_ALL_QUESTIONS':
            return  { ...state, data: action.payload};
        case 'POST_QUESTION':
            return  { ...state };
        case 'DELETE_QUESTION':
            return {...state};
        case 'VOTE_QUESTION':
            return {...state};
        case 'POST_ANSWER':
            return { ...state };
        case 'DELETE_ANSWER':
            return {...state};
        default:
            return state;
    }
}

export default questionsReducer;