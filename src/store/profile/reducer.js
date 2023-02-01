import { CHANGE_SHOW_NAME, CHANGE_NAME } from './actions';

const initialState = {
    showName: true,
    name: 'Sasha'
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_SHOW_NAME: {
            return {
                ...state,
                showName: !state.showName
            }
        }
        case CHANGE_NAME: {
            return {
                ...state,
                name: action.payload
            }
        }
        default:
            return state;
    }
}
