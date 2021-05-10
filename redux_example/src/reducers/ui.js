import * as types from '../actions/ActionTypes';

const initialState = {
    color : [255, 255, 255]
};

export default function ui(state = initialState, actions) {
    if(actions.type == types.SET_COLOR) {
        return {
            color : actions.color
        };
    } else {
        return state;
    }
}