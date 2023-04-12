import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link, withRouter } from 'react-router-dom';
import { Form, Row, Col, Input, Button, Badge, Table, Select, Popover, Tag, Card } from 'antd';
// import { withRouter } from 'react-router-dom';
import PageStyle from './pageStyle';

const PATH = process.env.REACT_APP_LINK_TO_PATH;
const { Option } = Select;
const Search = Input.Search;
class Analysis extends Component {
  render() {
    return (
      <PageStyle>
          <div className='container'>
              <div className="row background">
                    <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                      <div className='text-bg'>
                        <h1>Analysis</h1>
                      </div>
                    </div>
              </div>
			  <div className="about-history background">
				<div className="about-history-content">
					<div className="row">
						<div className="col-md-6 col-sm-12">
							<div className="about-history-txt">
								<h2>In silico mining of SSRs from cashew draft genome</h2>
								<p>
									SSRs were extracted from 3268 scaffolds of cashew draft genome assembled from 30X OxforNanopore long reads and the 110X illumina reads using the MISA software. The primers were designed for the mined SSRs using Primer3 software. The motifs were classified into different classes based on repeat unit size, nucleotide composition and arrangement of repeat sequences. As an output of query, a list of SSRs with primer sequence, estimated PCR amplicon size and the estimated annealing temperature (Ta) can be downloaded.
								</p>
								<p>
									Analysis of the composition of SSR repeat motifs in the identified SSRs showed that dinucleotide repeat motifs (59%) were dominant followed by trinucleotide repeat motifs (24.4%), complex SSRs repeats (11%), tetra-nucleotide repeat motifs (3.6%), pentanucleotide repeat motifs (1%) and hexanucleotide repeat motifs (0.8%). The frequency distribution of different repeat motifs in the draft genome of cashew is presented in Fig. 1A.
									</p>
							</div>
						</div>

						<div className="col-md-6 col-sm-12">
							<div className="single-about-history">
								<div className="about-history-txt">
									<div className="about-history-img">
										<img src="assets/images/aboutPic/flowChart.jpg" alt="about" /> 
											<p className='text-center pictureLegand'>In silico mining and development of SSR markers</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6 col-sm-12">
							<div className="single-about-history">
								<div className="about-history-txt">
									<p>{`${"The repeat motifs of Class I type of SSRs (≥20 bp size) were 34.3 % while Class II types (≥12 and <20 bp size) repeat motifs were 65.7%. the nucleotide composition of SSRs showed that 84% composed of A and/or T nucleotides while 16% composed of G and/or C nucleotides. The most dominant repeat sequences were AT (23.54%) followed by TA (16.71%) and AAT (4%) (Fig. 1B)."}`}</p>
									</div>
								</div>
							</div>
							<div className="col-md-6 col-sm-12">
								<div className="about-history-txt">
									<div className="single-about-history">
									<div className="about-history-img">
										<img src="assets/images/aboutPic/pieChart.jpg" alt="about" /> 
											<p className='text-center pictureLegand'>Composition of SSRs in cashew genome</p>
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


export default withRouter(connect(mapStateToProps, actionCreators)(Analysis));