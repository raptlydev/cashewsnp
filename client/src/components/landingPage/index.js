import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link, withRouter } from 'react-router-dom';
import { Form, Row, Col, Input, Button, Badge, Table, Select, Popover, Tag, Card } from 'antd';
// import { withRouter } from 'react-router-dom';
import PageStyle from './pageStyle';

const PATH = process.env.REACT_APP_LINK_TO_PATH;
const { Option } = Select;
const Search = Input.Search;
class Landing extends Component {
  render() {
    return (
      <PageStyle>
          <div className='container'>
              <div className="row background customNavigationStyle">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <div className="single-about-history">
                    <div className="about-history-txt">
                      <h2>Cashew SNPs Database</h2>
                      <p>
                      Cashew is one of the most popular edible tree nut cultivated in both tropical and sub-tropical regions of the world due to its delicious taste, high nutritive value, and industrial applications.Cashew (Anacardium occidentale L.) is a diploid (2n=42) nut tree with a estimated genome size of 419Mb. Recently, the first draft genome sequence of cashew cv. Bhaskara is published by our team (Savadi et al. 2022) and we resequenced the whole genome of Nethra Vaman for discovery of genome wide genetic variants (SNPs and InDels). Single nucleotide polymorphisms (SNPs) are becoming the widely used molecular markers in genetic studies and molecular breeding due to their high abundance, codominance, low mutation rates and amenability for automation. Considering the importance of SNP markers in genetics research and molecular breeding, <b>Cashew Single Nucleotide Polymorphisms (SNP) database (CSNPDb)</b> is designed to caters to the needs of cashew researchers and breeders, which are currently not available.
                      </p>
                    </div>
                  </div>
                    </div>
              </div>
              <div className="about-history background">
				<div className="about-history-content">
					<div className="row">
						<div className="col-md-12 col-sm-12">
            <div className="single-about-history">
                    <div className="about-history-txt">
                      <p>
                      CSNPDb is a first SNP marker database for cashew or an Anacardium species based on whole genome resequencing. It has collection of 420560 genomic SNPs derived by comparison of re-sequenced genome with the reference genome and variants analysis.
                      </p>
                    </div>
                  </div>
						</div>
              
					  </div>

            <div className="row">
                <div className="col-md-12 col-sm-12">
                  <div className="single-about-history">
                    <div className="about-history-txt">
                      <p>
                      CSNPDb presents an interactive interface to query the SNPs information of cashew genome. CSNPDb allows users to obtain SNPs based on Type of SNPs (Transitions: C/T, A/G and Transversions: A/T, A/C, C/G, T/G) and location in the genic or intergenic regions of genome (intergenic, intron, non synonymous coding, non synonymous start, splice site acceptor, splice site donor, start lost, stop gained, stop lost, synonymous coding, synonymous stop, 3′ UTR and 5' UTR.
                      </p>
                    </div>
                  </div>
                </div>
            </div>
				  </div>
			</div>
              <div className="row background about-history-txt withBorder">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    {/* <div className='centerOfExcellence center'>
                      <img src="../../assets/images/homePic/ICAR-logo.png" width={"45px"} />
                        <b className='centerOfExcellence center'>Centre of Excellence for Biotechnology</b>
                      <img src="../../assets/images/icarLogo.jpg" width={"45px"}/>
                    </div> */}
                    <div className="row background about-history-txt">
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <figure><img src="../../assets/images/institute.jpg" /></figure>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <span className='centerAlign'>
                              <img src="../../assets/images/homePic/ICAR-logo.png" width={"70px"} />
                            </span>
                            <div className='instituteCopy'>
                              <p>Centre of Excellence for Biotechnology</p>
                              <p>ICAR-Indian Institute of Cashew Research</p>
                              <p>Puttur-574 202, Karnataka, INDIA</p>
                            </div>
                            <span className='centerAlign'>
                              <img src="../../assets/images/icarLogo.jpg" width={"70px"}/>
                            </span>
                      </div>
                    </div>
                </div>
              </div>
              <div className="row background about-history-txt blueCopy">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <p>
                    <b>Please cite this database as:</b>
                    <p>Savadi S, Adiga JD., Muralidhara B.M, Shamsudheen M., Eradasappa E., Manjunatha K.,  and Anabi R (2022). Cashew Single Nucleotide Polymorphisms (SNP) database (CSNPDb)……….
                    </p>
                  </p>
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

export default withRouter(connect(mapStateToProps, actionCreators)(Landing));