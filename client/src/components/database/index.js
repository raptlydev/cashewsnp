import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { Card, Table, Switch, notification, Modal, Input, Row, Col, Spin, Button, Tabs, Pagination } from 'antd';
import { getPositionData, updateDatabaseData, handleDownload, getCashewSnpData } from "../../redux/actions/database";
import PageStyle from './pageStyle';
import DatabaseAdvanceFilter from './databaseAdvanceFilter';
import { saveAs } from 'file-saver';
import { Icon } from '@ant-design/compatible';
import ReactToPrint from 'react-to-print';

const duration = parseInt(process.env.REACT_APP_NOTIFICATION_DURATION);
const PATH = process.env.REACT_APP_LINK_TO_PATH;

const { TabPane } = Tabs;
const { Search } = Input;

class Database extends React.Component {

  componentWillUnmount() {
    this.props.updateDatabaseData({
      cashewSnpData: []
    });
  }

  handleDownload = () => {
    const { 
      scaffoldIds,
			repeatMotif,
			repeatSizeLessEqual, 
			repeatSizeEqual, 
			repeatSizeGreaterEqual,
			copyNoLessEqual, 
			copyNoEqual, 
			copyNoGreaterEqual,
			productSizeLessEqual,
			productSizeEqual, 
			productSizeGreaterEqual,
			tempLessEqual, 
			tempEqual, 
			tempGreaterEqual,
			repeatType} = this.props.database;

      const obj = {
        scaffoldIds: scaffoldIds && scaffoldIds,
        repeatMotif: repeatMotif && repeatMotif,
        repeatSizeLessEqual: repeatSizeLessEqual && repeatSizeLessEqual, 
        repeatSizeEqual: repeatSizeEqual && repeatSizeEqual, 
        repeatSizeGreaterEqual: repeatSizeGreaterEqual && repeatSizeGreaterEqual,
        copyNoLessEqual: copyNoLessEqual && copyNoLessEqual, 
        copyNoEqual: copyNoEqual && copyNoEqual, 
        copyNoGreaterEqual: copyNoGreaterEqual && copyNoGreaterEqual,
        productSizeLessEqual: productSizeLessEqual && productSizeLessEqual,
        productSizeEqual: productSizeEqual && productSizeEqual, 
        productSizeGreaterEqual: productSizeGreaterEqual && productSizeGreaterEqual,
        tempLessEqual: tempLessEqual && tempLessEqual, 
        tempEqual: tempEqual && tempEqual, 
        tempGreaterEqual: tempGreaterEqual && tempGreaterEqual,
        repeatType: repeatType && repeatType
      }

      this.props.handleDownload(obj).then((response)=>{
        if (response.status === 200) {
          //extract file name from Content-Disposition header
          var filename = this.extractFileName(response.headers['content-disposition']);
          //invoke 'Save As' dialog
          saveAs(response.data, filename);
        } else {
          notification.error({
            message: 'Error',
            description: 'Bulk user upload template not found.',
            duration: duration
          });
        }
      });
  }

  extractFileName = (contentDispositionValue) => {
    var filename = "";
    if (contentDispositionValue && contentDispositionValue.indexOf('attachment') !== -1) {
      var filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
      var matches = filenameRegex.exec(contentDispositionValue);
      if (matches != null && matches[1]) {
        filename = matches[1].replace(/['"]/g, '');
      }
    }
    return filename;
  }

  handlePagination = (page, pageSize) => {
    const { genotypeName,
			scaffoldNo,
			positionIds, 
			snpTypes, 
			mutationType,
			zygosity, 
			locationGene,
			searchName,
			searchInstituteName,
			searchEmail
      } = this.props.database;
      const obj = {
        genotypeName,
        scaffoldNo,
        positionIds, 
        snpTypes, 
        mutationType,
        zygosity, 
        locationGene,
        searchName,
        searchInstituteName,
        searchEmail,
        pageNo: page,
        pageSize: pageSize
      }
      this.props.updateDatabaseData({
        tableDataLoading: true
      });
      this.props.getCashewSnpData(obj).then(() => {
        this.props.updateDatabaseData({
          tableDataLoading: false
        });
      });
  }

  handlePaginationSizeChange = (current, size) => {
    const { genotypeName,
			scaffoldNo,
			positionIds, 
			snpTypes, 
			mutationType,
			zygosity, 
			locationGene,
			searchName,
			searchInstituteName,
			searchEmail
      } = this.props.database;
      const obj = {
        genotypeName,
        scaffoldNo,
        positionIds, 
        snpTypes, 
        mutationType,
        zygosity, 
        locationGene,
        searchName,
        searchInstituteName,
        searchEmail,
        pageNo: current,
        pageSize: size
      }
      this.props.updateDatabaseData({
        tableDataLoading: true
      });
      this.props.getCashewSnpData(obj).then(() => {
        this.props.updateDatabaseData({
          tableDataLoading: false
        });
      });
  }

  render() {
    const { cashewSnpData, totalRecords, pageNo, tableDataLoading } = this.props.database;

    const databaseColumns = [{
      title: "Genotype Name",
      dataIndex: 'genotype_name',
      key: 'genotype_name'
    },
    {
      title: "Scaffold No",
      dataIndex: 'scaffold_no',
      key: 'scaffold_no'
    },
    {
      title: "Position",
      dataIndex: 'position',
      key: 'position'
    },
    {
      title: "Reference",
      dataIndex: 'reference',
      key: 'reference'
    },
    {
      title: "Variant",
      dataIndex: 'variant',
      key: 'variant'
    },
    {
      title: "SNP Change",
      dataIndex: 'snp_change',
      key: 'snp_change'
    },
    {
      title: "Mutation type",
      dataIndex: 'mutation_type',
      key: 'mutation_type'
    },
    {
      title: "Zygosity",
      dataIndex: 'zygosity',
      key: 'zygosity'
    },
    {
      title: "Location within gene",
      dataIndex: 'location_within_gene',
      key: 'location_within_gene'
    },
    {
      title: "Quality",
      dataIndex: 'quality',
      key: 'quality'
    },
    {
      title: "Coverage",
      dataIndex: 'coverage',
      key: 'coverage'
    },
    {
      title: "Gene ID",
      dataIndex: 'gene_id',
      key: 'gene_id'
    },
    {
      title: "Trancript ID",
      dataIndex: 'trancript_id',
      key: 'trancript_id'
    },{
      title: "Exon ID",
      dataIndex: 'exon_id',
      key: 'exon_id'
    },{
      title: "Exon Rank",
      dataIndex: 'exon_rank',
      key: 'exon_rank'
    },{
      title: "Old AA/New AA",
      dataIndex: 'old_aa_new_aa',
      key: 'old_aa_new_aa'
    },
    {
      title: "Old codon/New codon",
      dataIndex: 'old_codon_new_codon',
      key: 'old_codon_new_codon'
    },
    {
      title: "Codon Num(CDS)",
      dataIndex: 'codon_num_cds',
      key: 'codon_num_cds'
    }];

    return (
      <PageStyle>
          <div className='text-bg'>
						<h3>Database Search</h3>
					</div>
          <Spin spinning={this.props.database.loadingData}>
            <DatabaseAdvanceFilter />
          </Spin>
          <div classname="printDownload" style={{ margin: '20px', float: 'right', position: 'relative', zIndex: '999' }}>
                <ReactToPrint
                    trigger={() => {
                      return <Icon type="printer" theme="twoTone" style={{ fontSize: '20px', cursor: 'pointer' }} />;
                    }}
                    content={() => this.inSilicoRef}
                  /> | <span onClick={this.handleDownload}><Icon type="download"  style={{ fontSize: '20px', cursor: 'pointer' }} /></span>
              </div>
              <Table columns={databaseColumns} pagination={false} dataSource={cashewSnpData} rowKey="id" scroll={{ x: true}} ref={el => (this.inSilicoRef = el)} size="small" loading={tableDataLoading}/>
              {cashewSnpData && cashewSnpData.length > 0 && <Pagination total={totalRecords} current={pageNo} onChange={this.handlePagination} showQuickJumper={true} showSizeChanger={true} onShowSizeChange={this.handlePaginationSizeChange} pageSizeOptions={['10', '50', '100', '500']} />}
      </PageStyle>
    );
  }
}

const actionCreators = {
  getPositionData,
  updateDatabaseData,
  handleDownload,
  getCashewSnpData
}

const mapStateToProps = (state) => {
  return {
    database: state.database
  };
};

export default withRouter(connect(mapStateToProps, actionCreators)(Database));
