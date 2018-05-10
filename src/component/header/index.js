import React,{ Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './header.scss';


class Header extends Component{
    constructor(props){
        super(props);
        this.handleclick=this.handleclick.bind(this);
        this.state={
            name:'111'
        }
    }
    handleclick(){
        this.setState({
            name:'444'
        });
    }
    render(){
        let {roomName,nickname}=this.props.initConfig;
        return(
            <div styleName="online_header">
                <h3 onClick={this.handleclick}>{roomName}</h3>
                <h5>主讲老师:<span>{nickname}</span></h5>
            </div>
        );
    }
}


export default CSSModules(Header,styles);