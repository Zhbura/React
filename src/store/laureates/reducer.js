import { FETCH_STATUSES } from "../../components/utils/constants"
import { GET_LAUREATES_REQUEST, GET_LAUREATES_SUCCESS, GET_LAUREATES_FAILURE } from "./actions"

const initialState = {
    data: [],
    error: null,
    status: FETCH_STATUSES.EDLE
}

export const laureatesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LAUREATES_REQUEST: {
            return {
                ...state,
                error: null,
                status: FETCH_STATUSES.REQUEST
            }
        }
        case GET_LAUREATES_SUCCESS: {
            return {
                ...state,
                data: action.payload,
                status: FETCH_STATUSES.SUCCESS
            }
        }
        case GET_LAUREATES_FAILURE: {
            return {
                ...state,
                error: action.payload,
                status: FETCH_STATUSES.FAILURE
            }
        }
        default:
            return state
    }
}
