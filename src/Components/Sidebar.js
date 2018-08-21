import React from 'react';
import { Layout, Menu, Icon } from "antd";
import {withRouter, NavLink} from 'react-router-dom';

const { Sider } = Layout;

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            collapsed: false,
            current: '/',
            loggedIn: false,
            user: {}
        };
    }

    componentWillMount = () => {
        this.setState({
            current: this.props.location.pathname
        })
    }

    onCollapse = collapsed => {
        this.setState({ collapsed });
    };

    handleClick = e => {
        this.setState({
            current: e.key
        })
    }

    render() {
        return(
            <Sider className='sidebar-full' collapsible="true" >
                <div className="logo" />
                <Menu className='sidebar-menu' theme="dark" selectedKeys={[this.props.location.pathname]} onClick={this.handleClick}>
                    <Menu.Item key="/">
                        <NavLink to="/">
                            <Icon type="home"/>
                            <span className="nav-text">Home</span>
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="/profile">
                        <NavLink to='/profile'>
                            <Icon type="profile" />
                            <span className="nav-text">Profile</span>
                        </NavLink>
                    </Menu.Item>
          
                </Menu>
            </Sider>
        );
    }
}

export default withRouter(Sidebar);