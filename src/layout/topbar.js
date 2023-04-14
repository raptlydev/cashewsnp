import React from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Layout, Avatar, Input, Badge, Menu, Dropdown, Spin } from 'antd';
import { updateGlobalData } from "../redux/actions/global";
import { getUnreadNotificationCount } from '../redux/actions/notifications';
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
        <div className='headerImage left'><img src="../../assets/images/picLeft.png" width={120} /></div>
        <div className='customNavHeader'>
          {/* <span className='headerIcons iconLeft'><img src="../../assets/images/Logoleft.png" width={55}/></span> */}
              <span className=''>Cashew SNPs database (CSDB)</span>
          {/* <span className='headerIcons iconRight'><img src="../../assets/images/Logoright.png" width={100}/></span> */}
        </div>
        <div className='headerImage right'><img src="../../assets/images/DNA.png" width={55} /></div>
      </header>
    );
  }
}

const actionCreators = {
  updateGlobalData,
  getUnreadNotificationCount
};

const mapStateToProps = (state) => {
  return {
    global: state.global,
    notifications: state.notifications
  };
};

export default connect(mapStateToProps, actionCreators)(Topbar);
