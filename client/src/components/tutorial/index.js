import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link, withRouter } from 'react-router-dom';
import { Form, Row, Col, Input, Button, Badge, Table, Select, Popover, Tag, Card } from 'antd';
import PageStyle from './pageStyle';

const PATH = process.env.REACT_APP_LINK_TO_PATH;

const { Option } = Select;
const Search = Input.Search;
class Tutorial extends Component {
  render() {
    return (
      <PageStyle>
          <div className='container'>
            <div className="row background">
                  <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                    <div className='text-bg'>
                      <h1>Tutorial</h1>
                    </div>
                  </div>
                  {/* <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3">
                      <div className="images_box">
                        <figure><img src="../../assets/images/Picture1.png" /></figure>
                      </div>
                  </div> */}
            </div>
            <div className="background">
              <div className="container">
                <div className="about-history-content">

                  <div className="row">
                    <div className="col-md-8 col-sm-12">
                      <div className="single-about-history">
                        <div className="about-history-txt">
                          <p>CMDB database contain seven tabs in the sidebar of the each page.</p>
                          <p><b>Home:</b> Contain brief introductory information about cashew and CMDB database.</p>
                          <p><b>About:</b> Gives general information of microsatellite/ SSRs, methods of SSR markers development and classifications of SSRs.</p>
                          <p><b>Database Search:</b> Allows retrieving or searching of CMDB for both genomic and genic microsatellite/ SSRs. Within the genomic and genic SSRs that are in silico mined and experimentally validated SSRs can be searched and downloaded using different search parameters.</p>
                          <p><b>Analysis:</b> Provides statistical data of distribution of different SSRs in the genome and shoot transcriptomes of cashew.</p>
                          <p><b>Tutorial:</b> Step by step guide on how to retrieve the microsatellite markers data from database based on different parameters.</p>
                          <p><b>Resources:</b> Provides the links to the portal related to cashew crop and bioinformatics research.</p> 
                          <p><b>Team/ Contact Us:</b> Details of the team members involved in the construction of CMDB database and Contact detail of the project investigator.</p>
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

export default withRouter(connect(mapStateToProps, actionCreators)(Tutorial));