import { RECEIVING } from '../constants/ActionsTypes';


export const receiving = data => {
    return {
        type: RECEIVING,
        payload: data
    }
};