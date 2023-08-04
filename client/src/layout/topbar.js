import React from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Layout, Avatar, Input, Badge, Menu, Dropdown, Spin } from 'antd';
import { updateGlobalData } from "../redux/actions/global";
import { Icon } from '@ant-design/compatible';
import { isMobile } from 'mobile-device-detect';

const { Header } = Layout;
const Search = Input.Search;

const PATH = process.env.REACT_APP_LINK_TO_PATH;
class Topbar extends React.Component {
  state = {
    notificationCount: 0
  }

  componentDidMount() {
    isMobile ? this.props.updateGlobalData({ collapsed: true }) : this.props.updateGlobalData({ collapsed: false });
  }

  toggle = () => {
    this.props.updateGlobalData({ collapsed: !this.props.global.collapsed });
  }

  render() {
    const { collapsed } = this.props.global;
    return (
      <header style={{ padding: 0 }}>
        <Icon
          className="trigger"
          type={collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={this.toggle}
        />
        <div className='headerImage left'><img src="../../assets/images/picLeft1.png" width={150} /></div>
        <div className='customNavHeader'>
          <span className=''>Cashew SNPs database (CSNPDb)</span>
        </div>
        <div className='headerImage right'><img src="../../assets/images/picRight1.png" width={150} /></div>
      </header>
    );
  }
}

const actionCreators = {
  updateGlobalData
};

const mapStateToProps = (state) => {
  return {
    global: state.global,
    notifications: state.notifications
  };
};

export default connect(mapStateToProps, actionCreators)(Topbar);
