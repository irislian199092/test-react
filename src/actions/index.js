import {LiveSDK} from 'vipkid-ocfe';

import axios from 'axios';
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'

export const selectSubreddit = subreddit => ({
  type: SELECT_SUBREDDIT,
  subreddit
})

export const invalidateSubreddit = subreddit => ({
  type: INVALIDATE_SUBREDDIT,
  subreddit
})

export const requestPosts = subreddit => ({
  type: REQUEST_POSTS,
  subreddit
})

export const receivePosts = (subreddit, json) => ({
  type: RECEIVE_POSTS,
  subreddit,
  posts: json,
  receivedAt: Date.now()
})


const fetchPosts = (onlineInfo) => dispatch => {
  dispatch(requestPosts(onlineInfo))
  let sdk=new LiveSDK();
  sdk.enterRoom(onlineInfo)
  .then((json)=>{
      dispatch(receivePosts(onlineInfo, json));
  })
  // .then((json)=>{
  //     let constains={
  //       userid:onlineInfo.userid,
  //       video:true,
  //       audio:true,
  //       screen:false,
  //       cameraId:'631b77eeea6e12697c4276c4d8125c8bb97f1986305e28903a3cbc189a97f504',
  //       microphoneId:'default'
  //     };
  //     //创建音频视频对象(constains)
  //     sdk.getMedialStream(constains)
  //     .then((localStream)=>{
  //         dispatch(receivePosts(subreddit, localStream))
  //         sdk.playMedial({medialStream:localStream,videoId:'local_video'});
  //     })
  // })
}ß

const shouldFetchPosts = (state) => {
  console.log(state);
  const initClient = state['initClient']; 
  if (!initClient) {
    return true;
  }
  if (state['isFetching']) {
    return false;
  }
  return posts.didInvalidate
}

export const fetchPostsIfNeeded =(onlineInfo) => (dispatch, getState) => {
  if (shouldFetchPosts(getState())) {
    return dispatch(fetchPosts(onlineInfo))
  }
}

