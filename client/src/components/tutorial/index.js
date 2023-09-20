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

                  <div className="row section">
                    <div className="col-md-8 col-sm-12">
                      <div className="single-about-history">
                        <div className="about-history-txt">
                          <p>The Cashew SNPs Database (CSNPDb) contains seven tabs in the sidebar of each page.</p>
                          <p><b>Home:</b> Contain brief introductory information about cashew and the CSNPDb database.</p>
                          <p><b>About:</b> Gives general information about single nucleotide polymorphisms (SNPs), methods of SNPs identification, and classifications of SNPs.</p>
                          <p><b>Analysis:</b> Provides summary statistics of genome alignment, ACGT content of the resequenced genome, statistics for the identified SNP types, and a graphical representation of genome sequence data.</p>
                          <p><b>Database Search:</b> Allows retrieval or searching of SNPs from the CSNPDb database using different parameters. The results are displayed after setting any criteria or parameters and clicking the search button.</p>
                          <p><b>Tutorial:</b> A step-by step guide on how to retrieve the SNPs data from the database based on different parameters or criteria</p>
                          <p><b>Resources:</b> Provides links to the portal related to cashew crop and bioinformatics research.</p> 
                          <p><b>Team/ Contact Us:</b> Details of the team members involved in the construction of the CSNPDb database and contact details of the project investigator</p>
                        </div>
                      </div>
                    </div>

                  </div>

                  <div className='row section'>
                    {/* Image Section  */}
                    <div className="col-md-10 col-sm-12">
								      <div className="about-history-txt">
									      <div className="single-about-history">
									        <div className="about-history-img">
										        <img src="assets/images/tutorial/Pic1.png" alt="about" /> 
									        </div>
									      </div>
								      </div>
							      </div>
                    {/* End of Image Section */}
                    <div className="col-md-10 col-sm-12">
                      <div className="single-about-history">
                        <div className="about-history-txt">
                          <p><b>#Home</b> page contains the basic description about the Cashew, and CSNPDb database.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='row section'>
                    {/* Image Section  */}
                    <div className="col-md-10 col-sm-12">
								      <div className="about-history-txt">
									      <div className="single-about-history">
									        <div className="about-history-img">
										        <img src="assets/images/tutorial/Pic2.png" alt="about" /> 
									        </div>
									      </div>
								      </div>
							      </div>
                    {/* End of Image Section */}
                    <div className="col-md-10 col-sm-12">
                      <div className="single-about-history">
                        <div className="about-history-txt">
                          <p><b>#About</b> page provides general information of Single nucleotide polymorphisms (SNPs).</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='row section'>
                    {/* Image Section  */}
                    <div className="col-md-10 col-sm-12">
								      <div className="about-history-txt">
									      <div className="single-about-history">
									        <div className="about-history-img">
										        <img src="assets/images/tutorial/Pic3.png" alt="about" /> 
									        </div>
									      </div>
								      </div>
							      </div>
                    {/* End of Image Section */}
                    <div className="col-md-10 col-sm-12">
                      <div className="single-about-history">
                        <div className="about-history-txt">
                          <p><b>#Analysis page:</b> Provides Summary statistics of Genome Alignment, ACGT content of Resequenced Genome, Statistics for the identified SNP types and graphical representation of genome sequence data.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='row section'>
                    {/* Image Section  */}
                    <div className="col-md-10 col-sm-12">
								      <div className="about-history-txt">
									      <div className="single-about-history">
									        <div className="about-history-img">
										        <img src="assets/images/tutorial/Pic4.png" alt="about" /> 
									        </div>
									      </div>
								      </div>
							      </div>
                    {/* End of Image Section */}
                    <div className="col-md-10 col-sm-12">
                      <div className="single-about-history">
                        <div className="about-history-txt">
                          <p><b>#Database Search:</b> Allows retrieving or searching of CSNPDb for SNPs.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='row section'>
                    {/* Image Section  */}
                    <div className="col-md-10 col-sm-12">
								      <div className="about-history-txt">
									      <div className="single-about-history">
									        <div className="about-history-img">
										        <img src="assets/images/tutorial/Pic5.png" alt="about" /> 
									        </div>
									      </div>
								      </div>
							      </div>
                    {/* End of Image Section */}
                    <div className="col-md-10 col-sm-12">
                      <div className="single-about-history">
                        <div className="about-history-txt">
                          <p><b>#Resources</b> page provides the links to the portal related to cashew crop and bioinformatics research and databases.</p>
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