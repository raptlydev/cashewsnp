import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { Card, Table, Switch, notification, Modal, Input, Row, Col, Spin, Button, Tabs } from 'antd';
import { getTranscriptData, updateDatabaseData, handleGenicExpDownload, handleGenicInSilicoDownload } from "../../../redux/actions/database";
import PageStyle from '../pageStyle';
import GenicInSilicoAdvanceFilter from './genicInSilicoAdvanceFilter';
import GenicExpValidateAdvanceFilter from './genicExpValidateAdvanceFilter';
import { saveAs } from 'file-saver';
import { Icon } from '@ant-design/compatible';
import ReactToPrint from 'react-to-print';

const duration = parseInt(process.env.REACT_APP_NOTIFICATION_DURATION);
const PATH = process.env.REACT_APP_LINK_TO_PATH;

const { TabPane } = Tabs;
const { Search } = Input;
// const scrollRef = useRef(null);

class GenicInSilico extends React.Component {
  state = {
    loading: false,
    cardLoadingStatus: false,
    deleteUserModal: false,
    userName: ""
  };

  componentDidMount() {
    this.setState({ cardLoadingStatus: false });
    this.props.getTranscriptData().then(() => { this.setState({ cardLoadingStatus: false }); });
  }

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
  };

  reRoute = () => {
    this.props.history.push({
      pathname: `${process.env.REACT_APP_LINK_TO_PATH}User/CreateUser`
    });
  }


  editUser = (data) => {
    this.showModal(data);
  }

  showModal = (data) => {
    // this.props.updateUserData({ isEditUser: true, userFormData: data, emailDataLoader: true, displayDefault: false });
    this.reRoute();
  }

  showDeleteUserModal = (record) => {
    this.setState({
      voterId: record.voterId,
      userName: record.name,
      deleteUserModal: true
    });
  }

  deleteUser = () => {
    const obj = {
      voterId: this.state.voterId
    }
    this.props.deleteUser(obj).then(() => {
      this.props.getUserList().then(() => {
        this.setState({
          cardLoadingStatus: false,
          voterId: "",
          deleteUserModal: false,
          userName: ""
        });
        notification.success({
          message: 'User deleted successfully',
          duration: 3
        });
      });

    })
  }

  componentWillUnmount() {
    this.props.updateDatabaseData({
      genicInSilicoData: [],
      genicExpData: [],
      tabChanged: false,
      tabValue: "1"
    });
  }

  handleCancel = () => {
    this.setState({
      cardLoadingStatus: false,
      voterId: "",
      deleteUserModal: false,
      userName: ""
    });
  }

  onUserSearch = (value) => {
    this.setState({
      loading: true
    });
    // this.props.updateUserData({ searchKey: value });
    this.props.getUserList(value).then(() => {
      this.setState({
        loading: false
      })
    });
  }

  handleTabChange = (e) =>{
    this.props.updateDatabaseData({
      genicInSilicoData: [],
      genicExpData: [],
      tabChanged: true,
      tabValue: e
    });
  }

  handleExpDownload = () => {
    const { repeatMotif,
			repeatSizeLessEqual, 
			repeatSizeEqual, 
			repeatSizeGreaterEqual,
			copyNoLessEqual, 
			copyNoEqual, 
			copyNoGreaterEqual,
			PICLessEqual,
			PICEqual, 
			PICGreaterEqual,
			tempLessEqual, 
			tempEqual, 
			tempGreaterEqual,
			repeatType} = this.props.database;

      const obj = {
        repeatMotif: repeatMotif && repeatMotif,
			  repeatSizeLessEqual: repeatSizeLessEqual && repeatSizeLessEqual, 
        repeatSizeEqual: repeatSizeEqual && repeatSizeEqual, 
        repeatSizeGreaterEqual: repeatSizeGreaterEqual && repeatSizeGreaterEqual,
        copyNoLessEqual: copyNoLessEqual && copyNoLessEqual, 
        copyNoEqual: copyNoEqual && copyNoEqual, 
        copyNoGreaterEqual: copyNoGreaterEqual && copyNoGreaterEqual,
        PICLessEqual: PICLessEqual && PICLessEqual,
        PICEqual: PICEqual && PICEqual, 
        PICGreaterEqual: PICGreaterEqual && PICGreaterEqual,
        tempLessEqual: tempLessEqual && tempLessEqual, 
        tempEqual: tempEqual && tempEqual, 
        tempGreaterEqual: tempGreaterEqual && tempGreaterEqual,
        repeatType: repeatType && repeatType
      }

      this.props.handleGenicExpDownload(obj).then((response)=>{
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

  handleInSilicoDownload = () => {
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

      this.props.handleGenicInSilicoDownload(obj).then((response)=>{
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

  render() {
    const { cardLoadingStatus, loading } = this.state;
    const { genicInSilicoData, genicExpData } = this.props.database;

    const inSilicocolumns = [{
      title: "Transcript",
      dataIndex: 'transcript',
      key: 'transcript',
    },
    {
      title: "Repeat type",
      dataIndex: 'repeat_type',
      key: 'repeat_type',
    },
    {
      title: "Repeat Motif",
      dataIndex: 'repeat_motif',
      key: 'repeat_motif'
    },
    {
      title: "Copy No",
      dataIndex: 'copy_no',
      key: 'copy_no'
    },
    {
      title: "Repeat size",
      dataIndex: 'repeat_size',
      key: 'repeat_size'
    },
    {
      title: "Forward primer",
      dataIndex: 'forward_primer',
      key: 'forward_primer'
    },
    {
      title: "Reverse primer",
      dataIndex: 'reverse_primer',
      key: 'reverse_primer'
    },
    {
      title: "PCR Product size",
      dataIndex: 'PCR_product_size',
      key: 'PCR_product_size'
    },
    {
      title: "Ta (oC)",
      dataIndex: 'ta_oc',
      key: 'ta_oc'
    }];

    const expValidateColumns = [{
      title: "Marker",
      dataIndex: 'marker',
      key: 'marker',
    },
    {
      title: "Repeat type",
      dataIndex: 'repeat_type',
      key: 'repeat_type',
    },
    {
      title: "Repeat Motif",
      dataIndex: 'repeat_motif',
      key: 'repeat_motif',
    },
    {
      title: "Copy No",
      dataIndex: 'copy_no',
      key: 'copy_no',
    },
    {
      title: "Repeat size",
      dataIndex: 'repeat_size',
      key: 'repeat_size',
    },
    {
      title: "Forward primer",
      dataIndex: 'forward_primer',
      key: 'forward_primer',
    },
    {
      title: "Reverse primer",
      dataIndex: 'reverse_primer',
      key: 'reverse_primer',
    },
    {
      title: "Ta (oC)",
      dataIndex: 'annealing_temperature_ta_oc',
      key: 'annealing_temperature_ta_oc',
    },
    {
      title: "Allele size range (bp)",
      dataIndex: 'allele_size_range_bp',
      key: 'allele_size_range_bp',
    },
    {
      title: "PIC",
      dataIndex: 'PIC',
      key: 'PIC'
    },
    {
      title: "Reference",
      dataIndex: 'reference',
      key: 'reference'
    }];
    return (
      <PageStyle>
          <div className='text-bg'>
						<h3>Genic SSR Database</h3>
					</div>
          <Tabs defaultActiveKey="1" className='filterTabs' onChange={this.handleTabChange}>
            <TabPane
              tab={
                <span>
                  <img src="../../assets/images/inSilicoTab.png" width={35}/>
                  In-Silico developed
                </span>
              }
              key="1"
            >
              {this.props.database.tabValue === "1" && 
                <Spin spinning={this.props.database.loadingData}>
                  <GenicInSilicoAdvanceFilter tabChanged={this.state.tabChanged} />
                </Spin>
              }
              <div classname="printDownload" style={{ margin: '20px', float: 'right', position: 'relative', zIndex: '999' }}>
              <ReactToPrint
                  trigger={() => {
                    return <Icon type="printer" theme="twoTone" style={{ fontSize: '20px', cursor: 'pointer' }} />;
                  }}
                  content={() => this.inSilicoRef}
                /> | <span onClick={this.handleInSilicoDownload}><Icon type="download"  style={{ fontSize: '20px', cursor: 'pointer' }} /></span>
                
              </div>
              <Table columns={inSilicocolumns} dataSource={genicInSilicoData} rowKey="id" scroll={{ x: true}} ref={el => (this.inSilicoRef = el)} size="small" />
            </TabPane>
            <TabPane
              tab={
                <span>
                  <img src="../../assets/images/expValidated.png" width={35}/>
                  Experimentally validated
                </span>
              }
              key="2"
            >
              {this.props.database.tabValue === "2" && 
              <Spin spinning={this.props.database.loadingData}>
                <GenicExpValidateAdvanceFilter tabChanged={this.state.tabChanged} />
              </Spin>}
              <div classname="printDownload" style={{ margin: '20px', float: 'right', position: 'relative', zIndex: '999' }}>
                <ReactToPrint
                  trigger={() => {
                    return <Icon type="printer" theme="twoTone" style={{ fontSize: '20px', cursor: 'pointer' }} />;
                  }}
                  content={() => this.expValidateRef}
                /> | <span onClick={this.handleExpDownload}><Icon type="download"  style={{ fontSize: '20px', cursor: 'pointer' }} /></span>
              </div>
              <Table columns={expValidateColumns} dataSource={genicExpData} rowKey="id" scroll={{ x: true }} ref={el => (this.expValidateRef = el)} size="small" />
            </TabPane>
          </Tabs>
      </PageStyle>
    );
  }
}

const actionCreators = {
  getTranscriptData,
  updateDatabaseData,
  handleGenicExpDownload,
  handleGenicInSilicoDownload,
  // deleteUser
}

const mapStateToProps = (state) => {
  return {
    global: state.global,
    user: state.user,
    database: state.database
  };
};

export default withRouter(connect(mapStateToProps, actionCreators)(GenicInSilico));
