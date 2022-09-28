export const setCurrrentUser = (data) => {
    return{ 
        type: 'FETCH_CURRENT_USER', 
        payload: data
    }
}