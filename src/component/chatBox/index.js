import React,{ Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './chatBox.scss';


class ChatBox extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount() {
        //const { dispatch, selectedSubreddit } = this.props;
        //dispatch(fetchPostsIfNeeded(selectedSubreddit));
    }
    render(){
        return(
            <div styleName="online_chatBox_wrap">
                <div styleName="online_chatBox_title"></div>
                <div styleName="online_chatBox_content_wrap">
                    <div styleName="online_chatBox_content">
                        <div styleName="online_chatBox_teacher">
                            <div styleName="online_chatBox_teacher_icon"></div>
                            <div styleName="online_chatBox_teacher_title">Teacher</div>
                            <div styleName="online_chatBox_teacher_text">
                            I am your teacher！
                            My name is Jimmy.
                            My name is Jimmy.My name is Jimmy.
                            </div>
                        </div>
                        <div styleName="online_chatBox_student">
                            <div styleName="online_chatBox_student_icon"></div>
                            <div styleName="online_chatBox_student_title">Teacher</div>
                            <div styleName="online_chatBox_student_text">
                            I am your teacher！
                            My name is Jimmy.
                            My name is Jimmy.My name is Jimmy.
                            </div>
                        </div>
                        <div styleName="online_chatBox_teacher">
                            <div styleName="online_chatBox_teacher_icon"></div>
                            <div styleName="online_chatBox_teacher_title">Teacher</div>
                            <div styleName="online_chatBox_teacher_text">
                            I am your teacher！
                            My name is Jimmy.
                            My name is Jimmy.My name is Jimmy.
                            </div>
                        </div>
                        <div styleName="online_chatBox_student">
                            <div styleName="online_chatBox_student_icon"></div>
                            <div styleName="online_chatBox_student_title">Teacher</div>
                            <div styleName="online_chatBox_student_text">
                            I am your teacher！
                            My name is Jimmy.
                            My name is Jimmy.My name is Jimmy.
                            </div>
                        </div>
                    </div>
                </div>
                <div styleName="online_chatBox_send_wrap">
                    <input type="text" styleName="online_chatBox_send" placeholder='Input something…'/>
                    <input type="button" styleName="online_chatBox_btn" />
                </div>
            </div>
        );
    }
}


export default CSSModules(ChatBox,styles);