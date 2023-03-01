import { getLaureatesRequest, getLaureatesSuccess, getLaureatesFailure, GET_LAUREATES_REQUEST, GET_LAUREATES_SUCCESS, GET_LAUREATES_FAILURE } from "../actions";

describe('testing action creators', () => {
    it('getLaureatesRequest(): should create an action to set the request', () => {
        const expectedAction = {
            type: GET_LAUREATES_REQUEST
        }
        expect(getLaureatesRequest()).toEqual(expectedAction)
    })

    it('getLaureatesSuccess(): must get data', () => {
        const expectedAction = {
            type: GET_LAUREATES_SUCCESS,
            payload: [1, 2, 3]
        }

        expect(getLaureatesSuccess(expectedAction.payload)).toEqual(expectedAction)
    })

    it('getLaureatesFailure(): must get error message', () => {
        const expectedAction = {
            type: GET_LAUREATES_FAILURE,
            payload: 'error'
        }
        expect(getLaureatesFailure(expectedAction.payload)).toEqual(expectedAction)
    })
})