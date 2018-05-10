import React,{ Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './player.scss';
import {LiveSDK} from 'vipkid-ocfe';

class Player extends Component{
    constructor(props){
        super(props);
        this.state={
            vOnOff:true,
            aOnOff:true
        };
        this.handleCloseCameraClick=this.handleCloseCameraClick.bind(this);
    }
    componentDidMount() {
        let {initConfig}=this.props;
        let {userRole}=initConfig;
        let sdk=new LiveSDK();
		sdk.enterRoom(initConfig)
		.then((data)=>{
            let {client,userid}=data;
            if(userRole===1){
                //老师
                let constains={
                    userid:userid,
                    video:true,
                    audio:true,
                    screen:false,
                    cameraId:'631b77eeea6e12697c4276c4d8125c8bb97f1986305e28903a3cbc189a97f504',
                    microphoneId:'default'
                };
                //创建音频视频对象(constains)
                sdk.getMedialStream(constains)
                .then((localStream)=>{
                    sdk.playMedial({medialStream:localStream,videoId:'local_video'});
                    sdk.publishMedialStream(localStream);
                })
            }
            if(userRole===2){
                //学生
                sdk.on('STREAM_PUBLISHED', function(evt) { 
                    let stream=evt.stream;
                     //点击订阅视频流
                     sdk.subscribeMedialStream(stream)
                     .then((evt)=>{
                         let stream=evt.stream;
                         //点击播放视频流
                         sdk.playMedial({medialStream:stream,videoId:'local_video'})  
                     })
                     .catch((error)=>{
                         //console.log(error);
                     });
                });
            }
		})
    }
    handleCloseCameraClick(){
        console.log('----')
        this.setState({
            vOnOff:false,
            aOnOff:true
        });
    }
    render(){
        
        let {initConfig}=this.props;
        let {userRole}=initConfig;
        let {vOnOff,aOnOff}=this.state;
        let videoTitle;
        let audioTitle;
        if(vOnOff){
            videoTitle='关闭摄像头';
        }else{
            videoTitle='打开摄像头';
        }
        if(aOnOff){
            audioTitle='关闭麦克风';
        }else{
            audioTitle='打开麦克风';
        }
        return(
            <div styleName="online_player_wrap">
                <div styleName="online_player">
                    <div id="local_video"></div>
                </div>

                {( userRole===1) &&
                    <div styleName="online_player_toolbar">
                        <span styleName="online_player_toolbar_camera" title={videoTitle} onClick={this.handleCloseCameraClick}></span>
                        <span styleName="online_player_toolbar_mico" title={audioTitle}></span>
                        <span styleName="online_player_toolbar_setting"></span>
                    </div>
                }
                { ( userRole===1) &&
                    <div styleName="online_player_stuInfo">
                        <span styleName="online_player_stuInfo_icon"></span>
                        <span styleName="online_player_stuInfo_text">
                            Student
                            <span styleName="online_player_stuInfo_num">689</span>
                        </span>
                    </div>
                }
            </div>
        );
    }
}


export default CSSModules(Player,styles);
