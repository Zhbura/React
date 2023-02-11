import { urlApi } from "../../components/utils/constants";

export const GET_LAUREATES_REQUEST = "LAUREATES::GET_LAUREATES_REQUEST";
export const GET_LAUREATES_SUCCESS = "LAUREATES::GET_LAUREATES_SUCCESS";
export const GET_LAUREATES_FAILURE = "LAUREATES::GET_LAUREATES_FAILURE";

export const getLaureatesRequest = () => ({
    type: GET_LAUREATES_REQUEST
})

export const getLaureatesSuccess = (laureates) => ({
    type: GET_LAUREATES_SUCCESS,
    payload: laureates,
})

export const getLaureatesFailure = (error) => ({
    type: GET_LAUREATES_FAILURE,
    payload: error,
})

export const getLaureates = () => async (dispatch) => {
    dispatch(getLaureatesRequest(dispatch));

    try {
        const response = await fetch(urlApi);
        if (!response.ok) {
            throw new Error(response.status);
        }
        const result = await response.json();
        dispatch(getLaureatesSuccess(result.laureates))
    } catch (err) {
        dispatch(getLaureatesFailure(err))
        console.log(err)
    }
}