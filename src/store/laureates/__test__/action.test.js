import { getLaureates, getLaureatesRequest, getLaureatesSuccess, getLaureatesFailure, GET_LAUREATES_REQUEST, GET_LAUREATES_SUCCESS, GET_LAUREATES_FAILURE } from "../actions";

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

describe('getLaureates test', () => {
    it("calls fn passed as an arg with getLaureatesRequest", () => {
        const mockDispatch = jest.fn();

        getLaureates()(mockDispatch);

        expect(mockDispatch).toHaveBeenCalledWith(getLaureatesRequest());
    })

    it("calls fn passed as an arg with getArticlesSuccess if fetch was successful", async () => {
        const mockDispatch = jest.fn();
        const result = ["data"]

        fetchMock.mockResponseOnce(JSON.stringify(result));

        await getLaureates()(mockDispatch);

        expect(mockDispatch).toHaveBeenLastCalledWith(getLaureatesSuccess());
    });

    it("calls fn passed as an arg with getLaureatesFailute if fetch was unsuccessful", async () => {
        const mockDispatch = jest.fn();
        const error = new Error("some fetch error");
        // eslint-disable-next-line no-undef
        fetchMock.mockRejectOnce(error);

        await getLaureates()(mockDispatch);

        expect(mockDispatch).toHaveBeenLastCalledWith(getLaureatesFailure(error));
    });
})