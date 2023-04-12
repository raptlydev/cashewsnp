import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link, withRouter } from 'react-router-dom';
import { Form, Row, Col, Input, Button, Badge, Table, Select, Popover, Tag, Card } from 'antd';
// import { withRouter } from 'react-router-dom';
import PageStyle from './pageStyle';

const PATH = process.env.REACT_APP_LINK_TO_PATH;

const { Option } = Select;
const Search = Input.Search;
class AboutUs extends Component {
  render() {
    return (
      <PageStyle>
		  <div className="container">
			<div className="row background">
					<div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
					<div className='text-bg'>
						<h1>About Cashew SNPs database (CSDB)</h1>
					</div>
					</div>
			</div>
			<div className="about-history background">
				<div className="about-history-content">
					<div className="row">
						<div className="col-md-6 col-sm-12">
							<div className="about-history-txt">
								<h2>Microsatellites/SSR database</h2>
								<p>
									Microsatellites or Simple Sequence Repeats (SSRs) are short tandem repeats of 1 to 6 base long motifs scattered in the genomes of eukaryotes and prokaryotes. SSRs are located in both coding and non-coding regions of the genomes. SSR loci the genomes have a high rate of mutation (about 10-3 to 10-4 per gamete per generation) due to DNA replication slippage or DNA recombination at the SSR loci resulting in length polymorphism of SSRs i.e. creation of multiple alleles per SSR loci. The high polymorphism, co-dominant and their spread across genome in large numbers make SSRs powerful genetic markers. SSRs are considered as choice of markers for applications like population genetics, linkage mapping, parentage assignment, marker assisted selection and genetic diversity analysis. Further, studies have shown that the SSRs are known to play important roles in gene regulation, either as binding sites for transcription factors to enhance/inhibit gene expression or as insulators. SSRs occurring in coding regions, mainly exist as tri-nucleotide repeats as selection against frame shift mutations prevent creation of other types of nucleotide SSRs. For example, in humans, an SSR is shown to be associated with diseases such as Fragile X syndrome (increased SSR repeats in the 5’UTR of FMRi). Thus understanding the SSR distribution in the genomes and their characteristics has become imperative.
								</p>
							</div>
						</div>

						<div className="col-md-6 col-sm-12">
							<div className="single-about-history">
								<div className="about-history-txt">
									<div className="about-history-img ssrPrincipalImage">
										<img src="assets/images/SSR-principle.jpg" alt="about" /> 
										<p className='text-center pictureLegand'>Principle of SSR markers</p>
									</div>
									<div className="single-about-history">
										<div className="about-history-img ssrImage">
											<img src="assets/images/SSR-development.jpg" alt="about" height={"310px"} width={"100%"}/> 
											<p className='text-center pictureLegand'>Methods of SSR Development</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
							<div className="col-md-6 col-sm-12">
								<div className="single-about-history">
									<div className="about-history-txt">
										<p>
											However, the SSR discovery and markers development is de novo for most of the species. The conventional method of SSR marker development through DNA library construction and screening for repeat motifs by hybridization is a costly and time consuming process. As a result many of the crop plants lacked sufficient SSR marker resources for a long time. However, the advances in the next generation sequencing (NGS) have provided a large set of genomic resources such as genome sequences, ESTs etc which could be used to mine large set of genome wide SSRs in silico using bioinformatics pipelines. Now efforts are in several crop plants to make available the large set of mined SSRs to the researchers and breeders world-wide as an online SSR database for crop plants.
										</p>
									</div>
								</div>
							</div>
							
							<div className="col-md-6 col-sm-12">
								<div className="about-history-txt">
									<div className="single-about-history">
										<div className="about-history-img">
											<img src="assets/images/aboutPic/typesOfSSR.jpg" alt="about" /> 
											<p className='text-center pictureLegand'>Types of SSRs</p>
										</div>
									</div>
								</div>
							</div>
					</div>
					<section  className="we-do">
						<div className="container">
							<div className="we-do-details">
								<div className="section-header text-left">
									<h2>Classification of SSRs</h2>
								</div>
								<div className="we-do-carousel">
									<div className="row">
										<ul>
											<li><b>A. Based on repeat unit size</b>: Mono-, Di-,Tri-Tetra-, Penta- and Hexa-nucleotides</li>
											<li><b>B. Based on nucleotide composition of repeat unit</b>: AT, GC, ATG, TAGC etc.</li>
											<li><b>C. Based on arrangement of repeat sequences</b>: <ul>
													<li>1. Simple/ perfect type: The repeat unit/sequence is continous and not interrupted by any base [e.g., ATATATATATAT or (AT)6]</li>
													<li>2. Compound type: Two different repeat unit/sequences are adjacent to each other [e.g., ATATATATCTCTCTCTCT or (AT)4 (CT)5]</li>
													<li>3. Interrupted type: The repeat unit/sequences are interrupted by bases [e.g., TATATATAGTATATA or (TA)4G(TA)3]</li>
												</ul>
											</li>
											<li><b>D. Based on motif length (Temnykh et al. 2001)</b>: <ul>
													<li>1. Class I:Repeat motif length larger than 20 bp]</li>
													<li>2. Class II: Repeat motif length between 11 and  20 bp</li>
													<li>3. Class III: Repeat motif length smaller than11 bp</li>
												</ul>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</section>
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

export default withRouter(connect(mapStateToProps, actionCreators)(AboutUs));