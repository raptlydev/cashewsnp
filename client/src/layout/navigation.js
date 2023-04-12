import React from 'react';
import { connect } from "react-redux";
import { Link, withRouter } from 'react-router-dom';
import { Layout, Menu } from 'antd';
// import logo from '../assets/images/I-Logo.svg';
// import title from '../assets/images/logo.svg';
// import army from '../assets/images/army.jpg';
import './navigation.css';
// import IntlMessages from '../utils/IntlMessages';
import { Icon } from '@ant-design/compatible';

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

const PATH = process.env.REACT_APP_LINK_TO_PATH;

class Navigation extends React.Component {
    render() {
        const { collapsed } = this.props.global;
        const selecetdRoutePath = this.props.location.pathname;
        const word = /[/](\w+)/ig;
        const selecetdOpenPath = selecetdRoutePath.match(word);

        return (
            <Sider trigger={null} collapsible collapsed={collapsed} width={260}>
                {/* <div className="logo" id="logo">
                    <Link to={`${PATH}`}>
                        <img src={army} alt="logo" style={{ marginTop: '-10px' }} />
                        <h1>HUMDARD-E-KUPWARA</h1>
                    </Link>
                </div> */}
                <Menu theme="light" defaultSelectedKeys={[selecetdRoutePath]} selectedKeys={[selecetdRoutePath]} defaultOpenKeys={selecetdOpenPath} mode="inline">
                    <Menu.Item key={`${PATH}`}>
                        <Link to={`${PATH}`}><span><Icon type="home" /><span>Home</span></span></Link>
                    </Menu.Item>
                    <Menu.Item key={`${PATH}about`}>
                        <Link to={`${PATH}about`}><span><Icon type="user" /><span>About</span></span></Link>
                    </Menu.Item>
                    <Menu.Item key={`${PATH}analysis`}>
                        <Link to={`${PATH}analysis`}><span><Icon type="user" /><span>Analysis</span></span></Link>
                    </Menu.Item>
                    <Menu.Item key={`${PATH}database`}>
                        <Link to={`${PATH}database`}><span><Icon type="user" /><span>Database Search</span></span></Link>
                    </Menu.Item>
                    {/* <SubMenu key={`${PATH}database`} title={<span><Icon type="database" /><span>Database Search</span></span>}>
                        {/* <Menu.Item key={`${PATH}database/genomic-database`}>
                            <Link to={`${PATH}database/genomic-database`}><span>Genomic SSR Database</span></Link>
                        </Menu.Item>
                        <Menu.Item key={`${PATH}database/genic-database`}>
                            <Link to={`${PATH}database/genic-database`}><span>Genic SSR Database</span></Link>
                        </Menu.Item> */}
                    {/* <Menu.Item key={`${PATH}analysis`}>
                        <Link to={`${PATH}analysis`}><span><Icon type="dot-chart" /><span>Analysis</span></span></Link>
                    </Menu.Item> */}
                    <Menu.Item key={`${PATH}tutorial`}>
                        <Link to={`${PATH}tutorial`}><span><Icon type="bulb" /><span>Tutorial</span></span></Link>
                    </Menu.Item>
                    <Menu.Item key={`${PATH}resources`}>
                        <Link to={`${PATH}resources`}><span><Icon type="branches" /><span>Resources/Links</span></span></Link>
                    </Menu.Item>
                    <Menu.Item key={`${PATH}contactus`}>
                        <Link to={`${PATH}contactus`}><span><Icon type="message" /><span>Team/Contact Us</span></span></Link>
                    </Menu.Item>
                </Menu>
            </Sider>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        global: state.global
    };
};

export default withRouter(connect(mapStateToProps)(Navigation));
