import React from "react";
import Topbar from '../Components/Topbar';
import Sidebar from '../Components/Sidebar';
//import "../Styles/NavBar.css";
import { Layout } from "antd";
import {withRouter} from 'react-router-dom';


const { Content } = Layout;

class FullLayout extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loggedIn: false,
            //user: {}
        }
    }

    componentDidMount = () => {
        this.getCurrUser();
    }

    getCurrUser = () => {
        let loggedIn = true;
        this.setState({
            loggedIn: loggedIn            
        })
    }

    handleLoginFinish = () => {
        this.getCurrUser();
        if(this.props.location.pathName === '/profile'){
            this.props.history.push('/');
        }
    }

    handleLogout = () => {
        this.getCurrUser();
        this.props.history.push('/');
    }


    render() {
        return (
            <Layout style={{height: "100vh"}}>
                <Sidebar />
                <Layout>
                <Topbar loggedIn={this.state.loggedIn} onLoginFinish={this.handleLoginFinish} onLogout={this.handleLogout} />
                     
                    <Content>
                        {this.props.children}
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default withRouter(FullLayout);