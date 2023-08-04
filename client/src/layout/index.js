import React from 'react';
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { Layout } from 'antd';
import './index.less';
import '../assets/styles/index.css';
import AppRoutes from "../routes/appRoutes";
import Navigation from "./navigation";
import Topbar from "./topbar";
import Bottombar from "./bottombar";
import './index.css';

const { Content } = Layout;

const PATH = process.env.REACT_APP_LINK_TO_PATH;

class Template extends React.Component {
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Navigation />
        <Layout>
          <Topbar />
          <Content style={{ padding: 24, background: '#fff' }}>
            <AppRoutes />
          </Content>
          <Bottombar />
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  };
};

export default withRouter(connect(mapStateToProps)(Template));
