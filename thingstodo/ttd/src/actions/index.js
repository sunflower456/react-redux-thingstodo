import * as types from './ActionTypes';

export function create(){
    return {
        type : types.CREATE
    };
}

export function change(e){
    return {
        type : types.CHANGE,
        e
    }
}

export function remove(id){
    return {
        type : types.REMOVE,
        id
    }
}

export function toggle(id) {
    return {
        type : types.TOGGLE,
        id
    }
}