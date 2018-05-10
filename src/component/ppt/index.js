import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './ppt.scss';

class Ppt extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div styleName="online_ppt_wrap">
                <div styleName="online_ppt"></div>
                <div styleName="online_ppt_tool">
                    <div styleName="ppt_list">
                        <div styleName="ppt_list_btn">
                            <span styleName="ppt_list_icon"></span>
                            <span styleName="ppt_list_text">PPT</span>
                        </div>
                        {/* <div styleName="ppt_list_content">

                        </div> */}
                    </div>
                    <div styleName="ppt_clean">
                        <span styleName="ppt_clear_icon"></span>
                        <span styleName="ppt_clear_text">CLEAR</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default CSSModules(Ppt,styles);