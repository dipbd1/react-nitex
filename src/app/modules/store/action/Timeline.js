import {ActionTypes} from "../ActionTypes";
import Http from "../../../services/Http";

export const storeTimeline = (data, merge) => {
    return {
        type: ActionTypes.FETCH_TIMELINE_LIST,
        payload: {response: data, merge: merge}
    }
}

export const storeOrderInfo = (data) => {
    return {
        type: ActionTypes.FETCH_ORDER_INFO_LIST,
        payload: data
    }
}

const generateTimeLineParams = (getState, params) => {
    if (getState().timelineStore.selectedDesignList.length > 0) {
        params += `&productIds=${getState().timelineStore.selectedDesignList.join(",")}`
    }
    return params;
}

export const clearDesignSelection = (params) => async (dispatch, getState) => {
    await dispatch({
        type: ActionTypes.CLEAR_DESIGN_SELECTION,
        payload: []
    })
    await dispatch(fetchTimeline(generateTimeLineParams(getState, params), false))
}

export const selectAllDesign = (data, params) => async (dispatch, getState) => {
    await dispatch({
        type: ActionTypes.SELECT_ALL_DESIGN,
        payload: data
    })
    await dispatch(fetchTimeline(generateTimeLineParams(getState, params), false))
}

export const toggleDesignSelection = (data, params) => async (dispatch, getState) => {
    await dispatch({
        type: ActionTypes.TOGGLE_DESIGN_SELECTION,
        payload: data
    })
    await dispatch(fetchTimeline(generateTimeLineParams(getState, params), false))
}

export const fetchTimeline = (params, merge) => async (dispatch) => {
    await Http.GET('getTimeLineData', params).then((response) => {
        dispatch(storeTimeline(response.data, merge));
    });
}


export const fetchOrderInfo = (orderId) => async (dispatch) => {
    await Http.GET('getTimeLineOrderInfo', orderId).then((response) => {
        dispatch(storeOrderInfo(response.data));
    });
}