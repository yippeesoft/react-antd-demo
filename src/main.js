/**
 * 
 * @authors luozh@snail.com
 * @date    2016-03-21 16:42:35
 * @description 主入口模块
 */

import React from 'react'
import { render } from 'react-dom'

// 引入React-Router模块
import { Router, Route, Link, hashHistory, IndexRoute, Redirect, IndexLink} from 'react-router'

// 引入Antd的导航组件
import { Menu, Icon, Switch } from 'antd'
const SubMenu = Menu.SubMenu

// 引入Ant-Design样式 & Animate.CSS样式
import 'animate.css/animate.min.css'
import 'font-awesome/css/font-awesome.min.css'

// 引入主体样式文件
import './main.css'

// 引入单个页面（包括嵌套的子页面）
import myTable from './components/table.js'
import myForm from './components/form.js'
import myChart from './components/chart.js'
import myAnimate from './components/animate.js'
import myCalendar from './components/calendar.js'
import myCard from './components/fetch.js'

import myStorage from './components/storage.js'

const ACTIVE = { color: 'red' }

// 配置导航
class Sider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            current: '',
            username: ''
        }
    }

    handleClick = (e) => {
        this.setState({
            current: e.key
        })
    }

    componentDidMount() {
        this.getUser()
    }

    getUser = () => {
        this.setState({
            username: 'luozh'
        })
    }

    render() {
        return (
            <div>
                <div id="leftMenu"> 
                    <h2 ><img src='src/assets/images/logo.png' width="50" id="logo"/> </h2>
                    <Menu theme="dark"
                        onClick={this.handleClick}
                        style={{ width: 185 }}
                        defaultOpenKeys={['sub1', 'sub2','sub3']}
                        defaultSelectedKeys={[this.state.current]}
                        mode="inline"
                    >
                        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>终端状态</span></span>}>
                            <Menu.Item key="1"><Link to="/myStorage">存储状态</Link></Menu.Item>
                            <Menu.Item key="2"><Link to="/myForm">网络状态</Link></Menu.Item>
                            <Menu.Item key="3"><Link to="/myStorage">版本信息</Link></Menu.Item>
                            <Menu.Item key="4"><Link to="/myChart">错误状态</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title={<span><Icon type="mail" /><span>终端配置</span></span>}>
                            <Menu.Item key="5"><Link to="/myTable">服务器配置</Link></Menu.Item>
                            <Menu.Item key="6"><Link to="/myTable">高级设置</Link></Menu.Item>
                            <Menu.Item key="6"><Link to="/myTable">系统设置</Link></Menu.Item>
                        </SubMenu>

                        <SubMenu key="sub3" title={<span><Icon type="appstore" /><span>系统工具</span></span>}>
                            <Menu.Item key="7"><Link to="/myCard">诊断工具</Link></Menu.Item>
                            <Menu.Item key="8"><Link to="/myCard">重启终端</Link></Menu.Item>
                            <Menu.Item key="9"><Link to="/myAnimate">系统日志</Link></Menu.Item>
                        </SubMenu>
                    </Menu>
                </div>
                <div id="rightWrap">
                    <Menu mode="horizontal">
                        <SubMenu title={<span><Icon type="user" />{ this.state.username }</span>}>
                            <Menu.Item key="setting:1">退出</Menu.Item>
                        </SubMenu>
                    </Menu>
                    <div className="right-box">
                        { this.props.children }
                    </div>
                </div>
            </div>
        )
    }
}


// 配置路由
render((
    <Router history={hashHistory} >
        <Route path="/" component={Sider}>
            <IndexRoute path="myCard" component={myCard} />
            <Route path="myStorage" component={myStorage} />
            <Route path="myForm" component={myForm} />
            <Route path="myChart" component={myChart} />
            <Route path="myCalendar" component={myCalendar} />
            <Route path="myAnimate" component={myAnimate} />
            <Route path="myCard" component={myCard} />
            <Route path="myTable" component={myTable} />
        </Route>
    </Router>
), document.getElementById('app'));


