import { FETCH_STATUSES } from "../../components/utils/constants";

export const selectLaureatesData = state => state.laureates.data;
export const selectLaureatesError = state => state.laureates.error;
export const selectLaureatesLoading = state =>
    state.laureates.status === FETCH_STATUSES.REQUEST;