import * as api from '../api';
import { setCurrrentUser } from './currentUser'

export const signup = ( authData , navigate) => async (dispatch) => {

    try{
        const { data } = await api.signUp(authData)
        dispatch({ type: 'AUTH', data})
        dispatch(setCurrrentUser( JSON.parse(localStorage.getItem('Profile')) ))
        navigate('/');
    }catch(error){
        console.log(error)
    }
}
export const login = ( authData , navigate) => async (dispatch) => {

    try{
        const { data } = await api.logIn(authData)
        dispatch({ type: 'AUTH', data})
        dispatch(setCurrrentUser( JSON.parse(localStorage.getItem('Profile')) ))
        navigate('/');
    }catch(error){
        console.log(error)
    }
}