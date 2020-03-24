import { VIDEO_LIST } from './actionType';

const initialState = {
    videos: [],
    totalResults: 0,
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case VIDEO_LIST:
            return {
                ...state,
                videos: action.payload.videoList,
                totalResults: action.payload.totalResults,
            };
        default:
            return state;
    }

};

export default rootReducer;