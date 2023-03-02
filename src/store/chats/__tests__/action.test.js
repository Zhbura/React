import { ADD_CHAT, DELETE_CHAT, addChat, deleteChat } from "../actions";

describe('testing action creators', () => {
    it('addChat', () => {
        const expectedAction = {
            type: ADD_CHAT,
            payload: {
                id: 1,
                name: 'Chat 1'
            }
        }
        expect(addChat(expectedAction.payload.id, expectedAction.payload.name)).toEqual(expectedAction)
    })

    it('deleteChat', () => {
        const expectedAction = {
            type: DELETE_CHAT,
            payload: {
                id: 1
            }
        }
        expect(deleteChat(expectedAction.payload)).toEqual(expectedAction)
    })
})