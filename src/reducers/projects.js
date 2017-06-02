import { RECEIVING } from '../constants/ActionsTypes';

const InitialState = {};

export function projects( state=InitialState, action=[] ) {
    switch( action.type )
    {
        case RECEIVING:
            return action.payload;
        default:
            return state;
    }
}
