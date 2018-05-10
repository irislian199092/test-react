
let type=window.location.hash.substring(1);
let initState;
if(type==1){
  initState={
    roomId:'op',
    roomName:'Reader: The Wonderful World of Sound-绘本：奇妙的声音世界',
    userId:534011879,
    userRole:1,
    nickname:'Alice',
    vendor:3,
    line:1,
    teacherUniqueUserId: 't1',
    uniqueUserId:'u1',
    timestamp: 1,
    token:'df18ad949213b594591ff2604c381b92',
    scheduledDateTime: 123456,
    duration: 123333
  };
}
if(type==2){
  initState={
    roomId:'op',
    userId:98400805,
    userRole:2,
    nickname:'lulian2',
    vendor:3,
    line:1,
    teacherUniqueUserId: 't2',
    uniqueUserId:'u2',
    timestamp: 1,
    token:'8ab4810f58e41ebe3c6e5ece9b1fd2d3',
    scheduledDateTime: 123456,
    duration: 123333 
  }
}



export function onlineInfo(state = initState, action) {
    switch (action.type) {
      // case 'INVALIDATE_SUBREDDIT':
      // case 'RECEIVE_POSTS':
      // case 'REQUEST_POSTS':
      //   return Object.assign({}, state,{name:'irislian'})
      default:
        return state
    }
}