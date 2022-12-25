import * as types from './types';

const initialState = {
    name: 'Sasha',
    showName: true
}

export const profileReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case types.CHANGE_NAME:
            return {
                ...state,
                name: payload
            }
            case types.CHANGE_SHOW_NAME: {
                return {
                  ...state,
                  showName: !state.showName,
                }
            }
        default:
            return state
    }
}