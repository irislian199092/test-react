import { combineReducers } from 'redux';
import {onlineInfo} from './onlineInfo.js';
import {selectedSubreddit,postsBySubreddit} from './stream.js';
export const rootReducer = combineReducers({
    onlineInfo,
    selectedSubreddit,
    postsBySubreddit
});
