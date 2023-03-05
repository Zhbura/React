import { CHANGE_NAME, changeName } from "../actions";

describe('testing action creators', () => {
    it('changeName(): must change the name', () => {
        const expectedAction = {
            type: CHANGE_NAME,
            payload: {
                name: "Nadya"
            }
        }
        expect(changeName(expectedAction.payload)).toEqual(expectedAction)
    })
})