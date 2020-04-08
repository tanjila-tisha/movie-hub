import { VIDEO_LIST, VIDEO_DETAIL, SEARCH_ITEM } from './actionType';

const initialState = {
    videos: [],
    totalResults: 0,
    videoDetail: {},
    searchItem: '',
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case VIDEO_LIST:
            return {
                ...state,
                videos: action.payload.videoList,
                totalResults: action.payload.totalResults,
            };
        case VIDEO_DETAIL:
            return {
                ...state,
                videoDetail: action.payload.videoDetail,
            };
            case SEARCH_ITEM:
                return {
                    ...state,
                    searchItem: action.payload.searchItem,
                };    
        default:
            return state;
    }

};

export default rootReducer;