import React from 'react';
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { Layout, Row, Col, Breadcrumb } from 'antd';
import './index.less';
import '../assets/styles/index.css';
import AppRoutes from "../routes/appRoutes";
import Navigation from "./navigation";
import Topbar from "./topbar";
import Bottombar from "./bottombar";
import './index.css';
// import IntlMessages from '../utils/IntlMessages';

const { Content } = Layout;

const PATH = process.env.REACT_APP_LINK_TO_PATH;

const pageTitleObj = {};
pageTitleObj['/genomic-database'] = "Genomic SSR Database";
pageTitleObj['/genic-database'] = "Genic SSR Database";

// pageTitleObj['/Role'] = "Role";
// pageTitleObj['/User'] = "User";
// pageTitleObj['/CreateUser'] = "Create";
// pageTitleObj['/ManageUser'] = "Manage";
// pageTitleObj['/AddRelations'] = "Add Relations";

class Template extends React.Component {
  render() {
    const word = /[/](\w+)/ig;
    const parentPath = this.props.location.pathname.match(word);
    var index = parentPath && parentPath.indexOf("/admin");
    if (index !== -1) {
      parentPath && parentPath.splice("/admin", 1);
    }
    const pathname = parentPath && parentPath[0];
    const childPathname = parentPath && parentPath[1];

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Navigation />
        <Layout>
          <Topbar />
          {/* <div className='customNavHeader'>
            <span className='headerIcons iconLeft'><img src="../../assets/images/Logoleft.png" width={55}/></span>
                <span className=''>CMDB:Cashew Microsatellite Database</span>
            <span className='headerIcons iconRight'><img src="../../assets/images/Logoright.png" width={100}/></span>
          </div> */}
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
