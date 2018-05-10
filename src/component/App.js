import React, { Component } from 'react';
import Header from './header';
// import Ppt from './ppt';
// import Player from './player';
// import ChatBox from './chatBox';
import CSSModules from 'react-css-modules';
import styles from './App.scss';



class App extends Component {
	constructor(props){
		super(props);
		let type=window.location.hash.substring(1);
		let initConfig;
		if(type==1){
			initConfig={
				roomId:'oa',
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
			initConfig={
				roomId:'oa',
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
		this.state={
			localstream:null,
			videoOnOff:true,
			audioOnOff:true,
			initConfig:initConfig
		}
	}
	componentDidMount() {

    }
	render() {
		let {initConfig}=this.state;
	    return (
	      	<div styleName="online_wrap">
              	<Header  initConfig={initConfig}/> 
				{/* <Ppt />
				<Player initConfig={initConfig}/>
				<ChatBox /> */}
			</div>
	    );
	}
}

export default CSSModules(App,styles);
