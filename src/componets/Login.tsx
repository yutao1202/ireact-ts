import BaseComponent from './BaseComponent';
import * as React from 'react';
import Button from 'antd/lib/button';
import Layout from 'antd/lib/layout';
const {Footer, Content } = Layout;

export default class Login extends BaseComponent {
    msg :string = 'Welcome yutao';
    constructor() {
        super();
    }
    render() {
        // let height = {position:'absolute',right:'50px',top:'300px',borderRadius:'10px',width:'400px',height:'400px',background:'rgba(0,0,0,.8)',color:'#fff'};
        return (
 
            <Layout style={{background:'none'}}>
                <Content>
                    <video autoPlay={true} muted={true}  loop={true} preload={'preload'}>
                        <source src={require('../static/video/bg.webm')} type="video/webm"/>
                    </video>
                    <div style={{position:'absolute',right:'50px',top:'30vh',borderRadius:'20px',width:'400px',height:'300px',background:'rgba(0,0,0,.8)',color:'#fff'}}>
                        <Button type="primary">  {this.msg}</Button>
                    </div>
                </Content>
                <Footer style={{ color:'#fff',textAlign: 'center',position:'fixed',bottom:'0',width:'100vw',background:'none' }}>
                    Ant Design ©2016 Created by Ant UED
                </Footer>
            </Layout>

            );
    }
}