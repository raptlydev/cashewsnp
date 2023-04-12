import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link, withRouter } from 'react-router-dom';
import { Form, Row, Col, Input, Button, Badge, Table, Select, Popover, Tag, Card } from 'antd';
import PageStyle from './pageStyle';

const PATH = process.env.REACT_APP_LINK_TO_PATH;

const { Option } = Select;
const Search = Input.Search;
class Resources extends Component {
  render() {
    return (
      <PageStyle>
          <div className='container'>
            <div className="row background">
                  <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                    <div className='text-bg'>
                      <h1>Recources</h1>
                    </div>
                  </div>
                  {/* <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3">
                      <div className="images_box">
                        <figure><img src="../../assets/images/Picture1.png" /></figure>
                      </div>
                  </div> */}
            </div>
            <div className="resources background">
              <div className="container">
                <div className="about-history-content">

                  <div className="row">
                    <div className="col-md-8 col-sm-12">
                      <div className="single-about-history">
                        <div className="about-history-txt">
                          <p><b>National Agricultural Bioinformatics Grid:</b> <a href="http://nabg.iasri.res.in/" target="_blank">http://nabg.iasri.res.in/</a></p>
                          <p><b>Indian Agricultural Statistics Research Institute:</b> <a href="http://www.iasri.res.in/" target="_blank">http://www.iasri.res.in/</a></p>
                          <p><b>National Center for Biotechnology Information:</b> <a href="http://www.ncbi.nlm.nih.gov/" target="_blank">http://www.ncbi.nlm.nih.gov/</a></p>
                          <p><b>Indian Council for Agricultural Research:</b> <a href="http://www.icar.org.in/" target="_blank">http://www.icar.org.in/</a></p>
                          <p><b>International Plant Genetic Resources Institute :</b><a href="http://www.bioversityinternational.org/" target="_blank">http://www.bioversityinternational.org/</a></p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>
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

export default withRouter(connect(mapStateToProps, actionCreators)(Resources));