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
            <div className="resources background">
              <div className="container">
                <div className="about-history-content">
                  <div className="row">
                    <div className="col-md-12 col-sm-12">
                      <div className="single-about-history">
                        <div className="about-history-txt">
                          <h2>Genomic Resource links</h2>
                          <p>
                            <b>Cashew draft genome (NCBI link; accession ID # PRJNA766521;</b>
                            <a href="https://www.ncbi.nlm.nih.gov/genome/?term=cashew" target="_blank">https://www.ncbi.nlm.nih.gov/genome/?term=cashew</a>
                          </p>
                          <p>
                            <b>Cashew transcriptome data (NCBI link; accession ID # PRJNA766798;</b>
                            <a href="https://www.ncbi.nlm.nih.gov/bioproject/766798" target="_blank">https://www.ncbi.nlm.nih.gov/bioproject/766798</a>
                          </p>
                          <p>
                            <b>Cashew Microsatellite database (CMDB):</b>
                            <a href="" target="_blank">http://www.cashewmicrosatellitedatabase.com</a>
                          </p>
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

export default Resources;