import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link, withRouter } from 'react-router-dom';
import { Form, Row, Col, Input, Button, Badge, Table, Select, Popover, Tag, Card } from 'antd';
// import { withRouter } from 'react-router-dom';
import PageStyle from './pageStyle';

const PATH = process.env.REACT_APP_LINK_TO_PATH;

const { Option } = Select;
const Search = Input.Search;
class Navigation extends Component {
  render() {
    return (
      <PageStyle>
          <section id="menu">
			<div className="container">
				<div className="menubar">
					<nav className="navbar navbar-default">
						<div className="navbar-header">
							<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
								<span className="sr-only">Toggle navigation</span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
							</button>
							<a className="navbar-brand" href="index.html">
								{/* <img src="assets/images/logo/logo.png" alt="logo" /> */}
							</a>
						</div>

						<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
							<ul className="nav navbar-nav navbar-right">
								<li className="active"><a href="index.html">Home</a></li>
								<li><a href="about.html">About</a></li>
								<li><a href="service.html">Service</a></li>
								<li><a href="project.html">Project</a></li>
								<li><a href="team.html">Team</a></li>
								<li><a href="blog.html">Blog</a></li>
								<li><a href="contact.html">Contact</a></li>
								<li>
									<a href="#">
										<span className="lnr lnr-cart"></span>
									</a>
								</li>
								<li className="search">
									<form action="">
										<input type="text" name="search" placeholder="Search...." />
										<a href="#">
											<span className="lnr lnr-magnifier"></span>
										</a>
									</form>
								</li>
							</ul>
						</div>
					</nav>
				</div>
			</div>
		</section>
      </PageStyle>
    );
  }
}

const actionCreators = {
};

const mapStateToProps = (state) => {
  return {
    global: state.global,
    notifications: state.notifications
  };
};

// const WrappedDynamicRule = Form.create({ name: 'notifications' })(Notification);

export default withRouter(connect(mapStateToProps, actionCreators)(Navigation));