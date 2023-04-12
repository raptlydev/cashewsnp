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
				<div className="about-history background">
					<div className="about-history-content">
						<div className="row">
						<div className="col-md-12 col-sm-12">
							<div className="about-history-txt">
								<h2>Summary statistics of genome allignment</h2>
								<table className='analysisTable'>
									<tr>
										<th>Parameter</th>
										<th>Value</th>
									</tr>
									<tr>
										<td>Reference size</td>
										<td>356,594,228</td>
									</tr>
									<tr>
										<td>Number of reads</td>
										<td>84,954,522</td>
									</tr>
									<tr>
										<td>Mapped reads</td>
										<td>82,544,177 / 97.16%</td>
									</tr>
									<tr>
										<td>Unmapped reads</td>
										<td>2,410,345 / 2.84%</td>
									</tr>
									<tr>
										<td>Mapped paired reads</td>
										<td>82,544,177 / 97.16%</td>
									</tr>
									<tr>
										<td>Mapped reads, first in pair</td>
										<td>41,273,162 / 48.58%</td>
									</tr>
									<tr>
										<td>Mapped reads, second in pair</td>
										<td>41,271,015 / 48.58%</td>
									</tr>
									<tr>
										<td>Mapped reads, both in pair</td>
										<td>82,245,544 / 96.81%</td>
									</tr>
									<tr>
										<td>Mapped reads, singletons</td>
										<td>298,633 / 0.35%</td>
									</tr>
									<tr>
										<td>Secondary alignments</td>
										<td>0</td>
									</tr>
									<tr>
										<td>Supplementary alignments</td>
										<td>1,194,030 / 1.41%</td>
									</tr>
									<tr>
										<td>Read min/max/mean length</td>
										<td>30 / 151 / 146.41</td>
									</tr>
									<tr>
										<td>Duplicated reads (estimated)</td>
										<td>47,941,833 / 56.43%</td>
									</tr>
									<tr>
										<td>Duplication rate</td>
										<td>63.17%</td>
									</tr>
									<tr>
										<td>Clipped reads</td>
										<td>9,865,584 / 11.61%</td>
									</tr>
								</table>
							</div>
						</div>
						</div>
					</div>
				</div>
				<div className="about-history background">
					<div className="about-history-content">
						<div className="row">
				<div className="col-md-12 col-sm-12">
					<div className="about-history-txt">
						<h2>ACGT Content of resequenced genome cv. Nethra Vaman</h2>
						<table className='analysisTable'>
							<tr>
								<th>Parameter</th>
								<th>Value</th>
							</tr>
							<tr>
								<td>Number/percentage of A's</td>
								<td>3,762,027,804 / 32.46%</td>
							</tr>
							<tr>
								<td>Number/percentage of C's</td>
								<td>2,044,348,351 / 17.64%</td>
							</tr>
							<tr>
								<td>Number/percentage of T's</td>
								<td>3,752,359,917 / 32.37%</td>
							</tr>
							<tr>
								<td>Number/percentage of G's</td>
								<td>2,032,357,244 / 17.53%</td>
							</tr>
							<tr>
								<td>Number/percentage of N's</td>
								<td>133,651 / 0%</td>
							</tr>
							<tr>
								<td>GC Percentage</td>
								<td>35.17%</td>
							</tr>
						</table>
					</div>
				</div>
						</div>
					</div>
				</div>
				<div className="about-history background">
					<div className="about-history-content">
						<div className="row">
							<div className="col-md-12 col-sm-12">
								<div className="about-history-txt">
									<h2>Statistics for the identified SNP types</h2>
									
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="about-history background">
					<div className="about-history-content">
						<div className="row">
							<div className="col-md-12 col-sm-12">
								<div className="about-history-txt">
									<h2>Graphical representation of genome sequence data</h2>
									
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


export default Analysis;