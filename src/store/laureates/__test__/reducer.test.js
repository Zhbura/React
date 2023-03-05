import { laureatesReducer } from "../reducer";
import { GET_LAUREATES_REQUEST, GET_LAUREATES_SUCCESS, GET_LAUREATES_FAILURE } from "../actions";
import { FETCH_STATUSES } from "../../../components/utils/constants";

const initialState = {
    data: [],
    error: null,
    status: FETCH_STATUSES.EDLE
}

describe('laureates reducer', () => {
    it('GET_LAUREATES_REQUEST', () => {
        const action = {
            type: GET_LAUREATES_REQUEST,
        }

        expect(laureatesReducer(initialState, action)).toEqual({
            ...initialState,
            status: FETCH_STATUSES.REQUEST
        })
    })

    it('GET_LAUREATES_SUCCESS', () => {
        const action = {
            type: GET_LAUREATES_SUCCESS,
            payload: [1, 2, 3]
        }

        expect(laureatesReducer(initialState, action)).toEqual({
            ...initialState,
            status: FETCH_STATUSES.SUCCESS,
            data: action.payload
        })
    })

    it('GET_LAUREATES_FAILURE', () => {
        const action = {
            type: GET_LAUREATES_FAILURE,
            payload: "Message error"
        }

        expect(laureatesReducer(initialState, action)).toEqual({
            ...initialState,
            status: FETCH_STATUSES.FAILURE,
            error: action.payload
        })
    })
})