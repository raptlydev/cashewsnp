import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon, Row, Col, DatePicker, Select, Button, Card, Tag, Tooltip, Input, Switch, Radio, Slider, InputNumber } from 'antd';
import PageStyle from '../pageStyle';
import { getGenomicExpData, updateDatabaseData } from "../../../redux/actions/database";
import { Form } from '@ant-design/compatible';
import { InfoCircleOutlined } from '@ant-design/icons';

const { RangePicker } = DatePicker;
const Option = Select.Option;

// import { updateProjectClaimsData, getProjectClaimsMasterData, viewAllClaimGroups, getPMAllocationMasterData, getSubCategory, getRequestType } from "../../redux/actions/claimProject";

class GenomicExpValidateAdvanceFilter extends Component {
	constructor(props) {
		super(props);
		this.myRef = React.createRef();
		this.myRef2 = React.createRef();
	}

	state = {
		dataLoading: false,
		callFilter: false,
		callReset: false
	}

	componentDidMount() {
		// this.props.getProjectClaimsMasterData();
		// this.props.getSubCategory();
		// this.props.getRequestType();
	}

	componentWillUnmount() {
		if(this.props.database.tabChanged){
			this.props.form.resetFields();
			this.props.updateDatabaseData({
				tabChanged: false
			});
		}
	}

	onFilterClose = (e) => {
		this.props.form.resetFields();
		this.props.updateUserData({ openAdvanceFilter: false })
	}

	resetFilterValues = () => {
		this.props.form.resetFields();
		this.props.updateDatabaseData({
			genomicInSilicoData: [],
			genomicExpData: []
		});
		this.myRef2.current.scrollIntoView();
	}

	applyFilter = () => {
		this.setState({ callFilter: true });
		let { repeatMotif, repeatSizeLessEqual, repeatSizeEqual, repeatSizeGreaterEqual, copyNoLessEqual, copyNoEqual, copyNoGreaterEqual, PICLessEqual, PICEqual, PICGreaterEqual, tempLessEqual, tempEqual, tempGreaterEqual, repeatType, searchName, searchInstituteName, searchEmail } = this.props.form.getFieldsValue(['repeatMotif', 'repeatSizeLessEqual', 'repeatSizeEqual', 'repeatSizeGreaterEqual', 'copyNoLessEqual', 'copyNoEqual', 'copyNoGreaterEqual', 'PICLessEqual', 'PICEqual', 'PICGreaterEqual', 'tempLessEqual', 'tempEqual', 'tempGreaterEqual', 'repeatType', 'searchName', 'searchInstituteName', 'searchEmail' ]);
		let { searchKey } = this.props.user;

		const obj = {
			repeatMotif,
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
			repeatType,
			searchName,
			searchInstituteName,
			searchEmail
		}
		this.props.updateDatabaseData({
			repeatMotif,
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
			repeatType,
			searchName,
			searchInstituteName,
			searchEmail,
			loadingData: true
		});
		
		this.props.getGenomicExpData(obj).then(() => {
			this.setState({ callFilter: false });
			this.props.updateDatabaseData({
				loadingData: false
			});
			this.myRef.current.scrollIntoView();
		});
	}

	// handleClose = (id, ids, idKey, propKey) => {
	// 	const selVals = ids.filter(idsId => idsId.key !== id.key)
	// 	this.props.updateProjectClaimsData({ [idKey]: selVals })
	// 	this.props.form.setFieldsValue({
	// 		[propKey]: selVals
	// 	})
	// }

	onChange = e => {
		console.log('radio checked', e.target.value);
		this.setState({
		  value: e.target.value,
		});
	  };

	  onRepeatChange = e => {
		this.setState({
		  repeatValue: e.target.value,
		});
	  };

	render() {
		const { callFilter, callReset } = this.state;
		const { getFieldDecorator } = this.props.form;
		const dateFormat = process.env.DATE_FORMAT;

		return (
			<PageStyle>
				<Form layout="vertical" ref={this.myRef2}>
					<div>
					<Row gutter={24} type="flex" justify="start" className='dbFilterContainer'> 
							<Col xxl={8} xl={8} lg={8} md={8} sm={24} xs={24}>
								<Form.Item >
									{getFieldDecorator('aadharNo', {})(
										<Radio.Group onChange={this.onChange} value={this.state.value}>
											<Radio value={"repeatType"}>Repeat Type</Radio>
											<Radio value={"repeatMotif"}>Repeat Motif</Radio>
										</Radio.Group>								
									)}
								</Form.Item>
							</Col>
							{this.state.value ? this.state.value === "repeatType" ? 
								<Col xxl={8} xl={8} lg={8} md={8} sm={24} xs={24}>
								<Form.Item label={"Select Repeat Type"}>
									{getFieldDecorator('repeatType', {})(
										<Select 
											placeholder="Select Repeat Type" 
											style={{width: '100%'}}
											onChange={() => this.setState({ disabled: false })}
										>
											<Option value="2">Di-nucleotide</Option>
											<Option value="3">Tri-nucleotide</Option>
											<Option value="4">Tetra-nucleotide</Option>
											<Option value="5">Penta-nucleotide</Option>
											<Option value="6">Hexa-nucleotide</Option>
											<Option value="C">Complex type (compound /interrupted)</Option>
										</Select>								
									)}
								</Form.Item>
							</Col> : 
							<Col xxl={8} xl={8} lg={8} md={8} sm={24} xs={24}>
							<Form.Item label={"Enter Repeat Motif"}>
								{getFieldDecorator('repeatMotif', {})(
									<Input type="text" placeholder="Repeat Motif" onChange={() => this.setState({ disabled: false })} />
								)}
							</Form.Item>
						</Col> : null}
							</Row>
					</div>
					<div>
					<Row gutter={24} type="flex" justify="start" className='dbFilterContainer'> 
							<Col xxl={8} xl={8} lg={8} md={8} sm={24} xs={24}>
								<Form.Item>
									{getFieldDecorator('repeat', {})(
										<Radio.Group onChange={this.onRepeatChange} value={this.state.repeatValue}>
											<Radio value={"repeatSize"}>Repeat Size(bp)</Radio>
											<Radio value={"repeatCopy"}>Repeat Copy No</Radio>
										</Radio.Group>								
									)}
								</Form.Item>
							</Col>
							{this.state.repeatValue ? this.state.repeatValue === "repeatSize" ? 
							<Col xxl={16} xl={16} lg={16} md={16} sm={24} xs={24}>
								<Form.Item label={"Enter Repeat Size"}>
									{getFieldDecorator('repeatSizeGreaterEqual', {})(
										<InputNumber size="small" min={1} max={100000} />
									)}
									<span>{"  >=  "}</span>
									{getFieldDecorator('repeatSizeEqual', {})(
										<InputNumber size="small" min={1} max={100000} />
									)}
									<span>{"  <=  "}</span>
									{getFieldDecorator('repeatSizeLessEqual', {})(
										<InputNumber size="small" min={1} max={100000} />
									)}
								</Form.Item>
							</Col> : 
							<Col xxl={16} xl={16} lg={16} md={16} sm={24} xs={24}>
								<Form.Item label={"Enter Repeat Copy No"}>
								{getFieldDecorator('copyNoGreaterEqual', {})(
										<InputNumber size="small" min={1} max={100000} />
									)}
									<span>{"  >=  "}</span>
									{getFieldDecorator('copyNoEqual', {})(
										<InputNumber size="small" min={1} max={100000} />
									)}
									<span>{"  <=  "}</span>
									{getFieldDecorator('copyNoLessEqual', {})(
										<InputNumber size="small" min={1} max={100000} />
									)}
								</Form.Item>
							</Col> : null}
							</Row>
					</div>
					<div>
						<Row gutter={24} type="flex" justify="start" className='dbFilterContainer'> 
								<Col xxl={16} xl={16} lg={16} md={16} sm={24} xs={24}>
									<label>PIC Value</label>
									<Tooltip title="PIC Range Value between 0.00 - 1.00"><InfoCircleOutlined style={{marginLeft: "5px", marginRight: "5px" }} /></Tooltip>
									<Form.Item style={{ display: 'inline-block', width: 'calc(15% - 17px)'}}>
										{getFieldDecorator('PICGreaterEqual', {})(
											<InputNumber size="small" min="0" max="1" step="0.01" />
										)}
									</Form.Item>
									<span>{"  >=  "}</span>
									<Form.Item style={{ display: 'inline-block', width: 'calc(15% - 17px)'}}>
										{getFieldDecorator('PICEqual', {})(
											<InputNumber size="small" min="0" max="1" step="0.01" />
										)}
									</Form.Item>
									<span>{"  <=  "}</span>
									<Form.Item style={{ display: 'inline-block', width: 'calc(15% - 17px)'}}>
										{getFieldDecorator('PICLessEqual', {})(
											<InputNumber size="small" min="0" max="1" step="0.01" />
										)}
									</Form.Item>
								</Col>
						</Row>
					</div>
					<div>
						<Row gutter={24} type="flex" justify="start" className='dbFilterContainer'> 
							<Col xxl={16} xl={16} lg={16} md={16} sm={24} xs={24}>
								<label style={{marginLeft: "5px", marginRight: "5px" }}>Annealing temperature (Ta) oC</label>
								<Form.Item style={{ display: 'inline-block', width: 'calc(15% - 17px)'}}>
									{getFieldDecorator('tempGreaterEqual', {})(
										<InputNumber size="small" min={1} max={100000} />
									)}
								</Form.Item>
								<span>{"  >=  "}</span>
								<Form.Item style={{ display: 'inline-block', width: 'calc(15% - 17px)'}}>
									{getFieldDecorator('tempEqual', {})(
										<InputNumber size="small" min={1} max={100000} />
									)}
								</Form.Item>
								<span>{"  <=  "}</span>
								<Form.Item style={{ display: 'inline-block', width: 'calc(15% - 17px)'}}>
									{getFieldDecorator('tempLessEqual', {})(
										<InputNumber size="small" min={1} max={100000} />
									)}
								</Form.Item>
							</Col>
						</Row>
					</div>
					<div>
						<Row gutter={24} type="flex" justify="start" className='dbFilterContainer'> 
							<Col xxl={8} xl={8} lg={8} md={8} sm={24} xs={24}>
								<Form.Item label={"Name"}>
									{getFieldDecorator('searchName', {})(
										<Input size="small" placeholder='Enter your name'/>
									)}
								</Form.Item>
							</Col>
							<Col xxl={8} xl={8} lg={8} md={8} sm={24} xs={24}>
								<Form.Item label={"Institute Name"}>
									{getFieldDecorator('searchInstituteName', {})(
										<Input size="small" placeholder='Enter Institute name'/>
									)}
								</Form.Item>
							</Col>
							<Col xxl={8} xl={8} lg={8} md={8} sm={24} xs={24}>
								<Form.Item label={"Email"}>
									{getFieldDecorator('searchEmail', {})(
										<Input size="small" placeholder='Enter email'/>
									)}
								</Form.Item>
							</Col>
						</Row>
					</div>
						
					
				</Form>
					<hr className="advance-filter-hr"></hr>

					<div className="center">
						<Row className="center" type="flex" justify="center" gutter={16}>
							<Col className="gutter-row right" xxl={4} xl={4} lg={4} md={8} sm={12} xs={12}>
								<Button className="advancedFilterOk" type="primary" loading={callFilter} onClick={() => this.applyFilter()} block>Search</Button>
							</Col>
							<Col className="gutter-row right pr-5" xxl={4} xl={4} lg={4} md={8} sm={12} xs={12}>
								<Button className="reset" loading={callReset} onClick={() => this.resetFilterValues()} block>Reset</Button>
							</Col>
							
						</Row>
					</div>
					<span ref={this.myRef}></span>
			</PageStyle>
		)
	}
}

const actionCreators = {
	getGenomicExpData,
	updateDatabaseData
	// viewAllClaimGroups,
	// getPMAllocationMasterData,
	// getRequestType,
	// getSubCategory,
	// updateUserData,
	// getUserList
};

const mapStateToProps = (state) => {
	return {
		global: state.global,
		user: state.user,
		database: state.database
	};
};

const WrappedDynamicRule = Form.create({ name: 'advance_filter' })(GenomicExpValidateAdvanceFilter);

export default connect(mapStateToProps, actionCreators)(WrappedDynamicRule);
