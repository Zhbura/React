import { chatsReducer } from "../reducer";
import { ADD_CHAT, DELETE_CHAT } from "../actions";

const initialState = []

describe('chats reducer test', () => {
    it('ADD_CHAT', () => {
        const action = {
            type: ADD_CHAT,
            payload: {
                id: 1,
                name: "Chat 1"
            }
        }

        expect(chatsReducer(initialState, action)).toEqual([
            ...initialState,
            { id: action.payload.id, name: action.payload.name }
        ])
    })

    it('DELETE_CHAT', () => {
        const action = {
            type: DELETE_CHAT,
            payload: {
                id: 1
            }
        }

        expect(chatsReducer(initialState, action)).toEqual(
            initialState.filter(({ id }) => id !== action.payload.id))
    })
})