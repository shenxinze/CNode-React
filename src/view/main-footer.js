import React,{Component} from 'react';
import {Layout} from 'antd'

export default class MainHeader extends Component {
  render(){
    return (
      <Layout.Footer style={{textAlign: "center"}}>
        Node 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。
      </Layout.Footer>
    )
  }
}