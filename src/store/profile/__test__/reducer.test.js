import { profileReducer } from "../reducer";
import { CHANGE_SHOW_NAME, CHANGE_NAME } from "../actions";

const initialState = {
    showName: true,
    name: 'Sasha'
}

describe('profile reducer test', () => {
    it('CHANGE_SHOW_NAME: change the flag showName', () => {
        const action = {
            type: CHANGE_SHOW_NAME
        }

        expect(profileReducer(initialState, action)).toEqual({
            ...initialState,
            showName: !initialState.showName
        })
    })

    it('CHANGE_NAME: change the name to the one that came from the payload', () => {
        const action = {
            type: CHANGE_NAME,
            payload: {
                name: 'Nadya'
            }
        }
        expect(profileReducer(initialState, action)).toEqual({
            ...initialState,
            name: action.payload
        })
    })
})