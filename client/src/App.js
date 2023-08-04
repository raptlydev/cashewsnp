import React, { Component } from 'react';
import { connect } from "react-redux";
import { Route, Switch } from 'react-router-dom';
import Template from "./layout";
import './assets/styles/bootstrap.min.css';
import './assets/styles/jquery.mCustomScrollbar.min.css';
import './assets/styles/responsive.css';
import './assets/styles/style.css';
import './assets/styles/owl.carousel.min.css';
import './assets/styles/owl.theme.default.min.css';

const PATH = process.env.REACT_APP_ROUTE_PATH;

class App extends Component {

  componentWillMount() {
  }

  render() {
    return (
          <Switch>
            <Route path={PATH} component={Template} />
          </Switch>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    global: state.global
  };
};

export default connect(mapStateToProps, { })(App);
